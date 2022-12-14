/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../common';

export interface QuestChainFactoryInterface extends utils.Interface {
  functions: {
    'create(string,string)': FunctionFragment;
    'createDeterministic(string,string,bytes32)': FunctionFragment;
    'createDeterministicWithRoles(string,string,address[],address[],address[],bytes32)': FunctionFragment;
    'createWithRoles(string,string,address[],address[],address[])': FunctionFragment;
    'getQuestChainAddress(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'predictDeterministicAddress(bytes32)': FunctionFragment;
    'questChainCount()': FunctionFragment;
    'questChainImpl()': FunctionFragment;
    'questChainToken()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateChainImpl(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'create'
      | 'createDeterministic'
      | 'createDeterministicWithRoles'
      | 'createWithRoles'
      | 'getQuestChainAddress'
      | 'owner'
      | 'predictDeterministicAddress'
      | 'questChainCount'
      | 'questChainImpl'
      | 'questChainToken'
      | 'renounceOwnership'
      | 'transferOwnership'
      | 'updateChainImpl',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'create', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'createDeterministic',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'createDeterministicWithRoles',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'createWithRoles',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getQuestChainAddress', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'predictDeterministicAddress', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'questChainCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'questChainImpl', values?: undefined): string;
  encodeFunctionData(functionFragment: 'questChainToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'updateChainImpl', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'create', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createDeterministic', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createDeterministicWithRoles', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createWithRoles', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getQuestChainAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'predictDeterministicAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'questChainCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'questChainImpl', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'questChainToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateChainImpl', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'QuestChainCreated(uint256,address)': EventFragment;
    'QuestChainImplUpdated(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'QuestChainCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'QuestChainImplUpdated'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface QuestChainCreatedEventObject {
  index: BigNumber;
  questChain: string;
}
export type QuestChainCreatedEvent = TypedEvent<[BigNumber, string], QuestChainCreatedEventObject>;

export type QuestChainCreatedEventFilter = TypedEventFilter<QuestChainCreatedEvent>;

export interface QuestChainImplUpdatedEventObject {
  oldImpl: string;
  newImpl: string;
}
export type QuestChainImplUpdatedEvent = TypedEvent<[string, string], QuestChainImplUpdatedEventObject>;

export type QuestChainImplUpdatedEventFilter = TypedEventFilter<QuestChainImplUpdatedEvent>;

export interface QuestChainFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QuestChainFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    create(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    createDeterministic(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    createDeterministicWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    createWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getQuestChainAddress(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    predictDeterministicAddress(_salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    questChainCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    questChainImpl(overrides?: CallOverrides): Promise<[string]>;

    questChainToken(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateChainImpl(
      _questChainImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  create(
    _details: PromiseOrValue<string>,
    _tokenURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  createDeterministic(
    _details: PromiseOrValue<string>,
    _tokenURI: PromiseOrValue<string>,
    _salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  createDeterministicWithRoles(
    _details: PromiseOrValue<string>,
    _tokenURI: PromiseOrValue<string>,
    _admins: PromiseOrValue<string>[],
    _editors: PromiseOrValue<string>[],
    _reviewers: PromiseOrValue<string>[],
    _salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  createWithRoles(
    _details: PromiseOrValue<string>,
    _tokenURI: PromiseOrValue<string>,
    _admins: PromiseOrValue<string>[],
    _editors: PromiseOrValue<string>[],
    _reviewers: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getQuestChainAddress(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  predictDeterministicAddress(_salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  questChainCount(overrides?: CallOverrides): Promise<BigNumber>;

  questChainImpl(overrides?: CallOverrides): Promise<string>;

  questChainToken(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateChainImpl(
    _questChainImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    create(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    createDeterministic(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<string>;

    createDeterministicWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<string>;

    createWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<string>;

    getQuestChainAddress(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    predictDeterministicAddress(_salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    questChainCount(overrides?: CallOverrides): Promise<BigNumber>;

    questChainImpl(overrides?: CallOverrides): Promise<string>;

    questChainToken(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateChainImpl(_questChainImpl: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'QuestChainCreated(uint256,address)'(
      index?: PromiseOrValue<BigNumberish> | null,
      questChain?: null,
    ): QuestChainCreatedEventFilter;
    QuestChainCreated(index?: PromiseOrValue<BigNumberish> | null, questChain?: null): QuestChainCreatedEventFilter;

    'QuestChainImplUpdated(address,address)'(
      oldImpl?: PromiseOrValue<string> | null,
      newImpl?: PromiseOrValue<string> | null,
    ): QuestChainImplUpdatedEventFilter;
    QuestChainImplUpdated(
      oldImpl?: PromiseOrValue<string> | null,
      newImpl?: PromiseOrValue<string> | null,
    ): QuestChainImplUpdatedEventFilter;
  };

  estimateGas: {
    create(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    createDeterministic(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    createDeterministicWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    createWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getQuestChainAddress(_index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    predictDeterministicAddress(_salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    questChainCount(overrides?: CallOverrides): Promise<BigNumber>;

    questChainImpl(overrides?: CallOverrides): Promise<BigNumber>;

    questChainToken(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateChainImpl(
      _questChainImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    createDeterministic(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    createDeterministicWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      _salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    createWithRoles(
      _details: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      _admins: PromiseOrValue<string>[],
      _editors: PromiseOrValue<string>[],
      _reviewers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getQuestChainAddress(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predictDeterministicAddress(
      _salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    questChainCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    questChainImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    questChainToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateChainImpl(
      _questChainImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
