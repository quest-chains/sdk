import { providers, utils } from 'ethers';
import { contracts } from '.';
import { QuestChainCommons } from './contracts/v1/contracts/QuestChain';
import {
  getChainInfo,
  getQuestChainInfo,
  GlobalInfoFragment,
  isSupportedNetwork,
  QuestChainInfoFragment,
} from './graphql';
import { waitUntilSubgraphIndexed } from './helpers';
import EventEmitter from 'events';

export enum QuestChainRole {
  OWNER = '0x0000000000000000000000000000000000000000000000000000000000000000',
  ADMIN = '0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775',
  EDITOR = '0x21d1167972f621f75904fb065136bc8b53c7ba1c60ccd3a7758fbee465851e9c',
  REVIEWER = '0xc10c77be35aff266144ed64c26a1fa104bae2f284ae99ac4a34203454704a185',
}

export class QuestChainsClient extends EventEmitter {
  private chainId: string;
  private provider: providers.Web3Provider;
  private globalInfo: GlobalInfoFragment | null = null;

  constructor(chainId: string, provider: providers.Web3Provider) {
    if (!isSupportedNetwork(chainId)) {
      throw new Error('Unsupported network');
    }
    super();
    this.chainId = chainId;
    this.provider = provider;
  }

  getChainId(): string {
    return this.chainId;
  }

  async getGlobalInfo(): Promise<GlobalInfoFragment> {
    if (this.globalInfo) {
      return this.globalInfo;
    }

    this.globalInfo = await getChainInfo(this.chainId);

    if (!this.globalInfo) {
      throw new Error('Could not get global info');
    }
    return this.globalInfo;
  }

  async getQuestChain(chainAddress: string): Promise<QuestChainInfoFragment | null> {
    if (!utils.isAddress(chainAddress)) {
      throw new Error('Invalid quest chain address');
    }
    return getQuestChainInfo(this.chainId, chainAddress);
  }

  private async handleTx(tx: providers.TransactionResponse): Promise<providers.TransactionReceipt> {
    this.emit('txResponse', tx);

    const receipt = await tx.wait();

    this.emit('txReceipt', receipt);

    const indexed = await waitUntilSubgraphIndexed(this.chainId, receipt.blockNumber);

    this.emit('txIndexed', indexed);
    return receipt;
  }

  async createQuestChain(
    chainInfo: QuestChainCommons.QuestChainInfoStruct,
    upgrade = false,
  ): Promise<providers.TransactionReceipt> {
    const { factoryAddress } = await this.getGlobalInfo();

    const factoryContract: contracts.V1.QuestChainFactory = contracts.V1.QuestChainFactory__factory.connect(
      factoryAddress,
      this.provider.getSigner(),
    );

    let tx: providers.TransactionResponse;
    if (upgrade) {
      tx = await factoryContract.createAndUpgrade(chainInfo, utils.randomBytes(32));
    } else {
      tx = await factoryContract.create(chainInfo, utils.randomBytes(32));
    }
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async upgradeQuestChain(questChain: QuestChainInfoFragment): Promise<providers.TransactionReceipt> {
    if (questChain.premium) {
      throw new Error('Quest chain is already upgraded');
    }
    const { factoryAddress } = await this.getGlobalInfo();

    const factoryContract: contracts.V1.QuestChainFactory = contracts.V1.QuestChainFactory__factory.connect(
      factoryAddress,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await factoryContract.upgradeQuestChain(questChain.address);

    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async grantRole(
    questChain: QuestChainInfoFragment,
    userAddress: string,
    roleHash: QuestChainRole,
  ): Promise<providers.TransactionReceipt> {
    // role management is the same on all versions
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.grantRole(roleHash, userAddress);
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async revokeRole(
    questChain: QuestChainInfoFragment,
    userAddress: string,
    roleHash: QuestChainRole,
  ): Promise<providers.TransactionReceipt> {
    // role management is the same on all versions
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.revokeRole(roleHash, userAddress);
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async pauseQuestChain(questChain: QuestChainInfoFragment): Promise<providers.TransactionReceipt> {
    if (questChain.paused) {
      throw new Error('Quest chain is already paused');
    }
    // pausing is the same on all versions
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.pause();
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async unpauseQuestChain(questChain: QuestChainInfoFragment): Promise<providers.TransactionReceipt> {
    if (questChain.paused) {
      throw new Error('Quest chain is already paused');
    }
    // pausing is the same on all versions
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.unpause();
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async addQuests(
    questChain: QuestChainInfoFragment,
    questDetailsList: string[],
  ): Promise<providers.TransactionReceipt> {
    if (questChain.paused) {
      throw new Error('Quest chain is already paused');
    }
    if (questDetailsList.length === 0) {
      throw new Error('No quests provided');
    }
    if (questChain.version === '0' && questDetailsList.length > 1) {
      throw new Error('Adding multiple quests not supported on this quest chain version');
    }

    if (questChain.version === '0') {
      const chainContract: contracts.V0.QuestChain = contracts.V0.QuestChain__factory.connect(
        questChain.address,
        this.provider.getSigner(),
      );

      const tx: providers.TransactionResponse = await chainContract.createQuest(questDetailsList[0]);
      const receipt = await this.handleTx(tx);

      return receipt;
    }
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.createQuests(questDetailsList);
    const receipt = await this.handleTx(tx);

    return receipt;
  }

  async editQuests(
    questChain: QuestChainInfoFragment,
    questIdList: string[],
    questDetailsList: string[],
  ): Promise<providers.TransactionReceipt> {
    if (questChain.paused) {
      throw new Error('Quest chain is already paused');
    }
    if (questDetailsList.length === 0) {
      throw new Error('No quests provided');
    }
    if (questIdList.length !== questDetailsList.length) {
      throw new Error('Quest details lengths do not match');
    }
    if (questChain.version === '0' && questDetailsList.length > 1) {
      throw new Error('Editing multiple quests not supported on this quest chain version');
    }

    if (questChain.version === '0') {
      const chainContract: contracts.V0.QuestChain = contracts.V0.QuestChain__factory.connect(
        questChain.address,
        this.provider.getSigner(),
      );

      const tx: providers.TransactionResponse = await chainContract.editQuest(questIdList[0], questDetailsList[0]);
      const receipt = await this.handleTx(tx);

      return receipt;
    }
    const chainContract: contracts.V1.QuestChain = contracts.V1.QuestChain__factory.connect(
      questChain.address,
      this.provider.getSigner(),
    );

    const tx: providers.TransactionResponse = await chainContract.editQuests(questIdList, questDetailsList);
    const receipt = await this.handleTx(tx);

    return receipt;
  }
}
