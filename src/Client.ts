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
import { getQuestChainAddressFromTx, waitUntilSubgraphIndexed } from './helpers';
import EventEmitter from 'events';

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

  async createQuestChain(
    chainInfo: QuestChainCommons.QuestChainInfoStruct,
    upgrade = false,
  ): Promise<QuestChainInfoFragment | null> {
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
    this.emit('txResponse', tx);

    const receipt = await tx.wait();

    this.emit('txReceipt', receipt);

    const indexed = await waitUntilSubgraphIndexed(this.chainId, receipt.blockNumber);

    this.emit('txIndexed', indexed)

    const questChainAddress = await getQuestChainAddressFromTx(receipt);

    return this.getQuestChain(questChainAddress);
  }
}
