/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type { QuestChainToken, QuestChainTokenInterface } from '../../contracts/QuestChainToken';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        internalType: 'contract IQuestChainFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_questChain',
        type: 'address',
      },
    ],
    name: 'setTokenOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_tokenURI',
        type: 'string',
      },
    ],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a06040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000037565b5033608052620001ba565b6002620000458282620000ee565b5050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200007457607f821691505b6020821081036200009557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000e957600081815260208120601f850160051c81016020861015620000c45750805b601f850160051c820191505b81811015620000e557828155600101620000d0565b5050505b505050565b81516001600160401b038111156200010a576200010a62000049565b62000122816200011b84546200005f565b846200009b565b602080601f8311600181146200015a5760008415620001415750858301515b600019600386901b1c1916600185901b178555620000e5565b600085815260208120601f198616915b828110156200018b578886015182559484019460019091019084016200016a565b5085821015620001aa5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805161262c620001dd6000396000818161013c0152610633015261262c6000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80632eb2c2d61161008c5780639dc29fac116100665780639dc29fac14610247578063a22cb4651461025a578063e985e9c51461026d578063f242432a146102b657600080fd5b80632eb2c2d61461020157806340c10f19146102145780634e1273f41461022757600080fd5b80630e89341c116100c85780630e89341c14610183578063162094c4146101a35780631caaa487146101b857806323eac4bd146101ee57600080fd5b8062fdd58e146100ee57806301ffc9a7146101145780630d66f59614610137575b600080fd5b6101016100fc366004611c06565b6102c9565b6040519081526020015b60405180910390f35b610127610122366004611c61565b6103a9565b604051901515815260200161010b565b61015e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010b565b610196610191366004611c85565b61048c565b60405161010b9190611d02565b6101b66101b1366004611e0b565b61052e565b005b61015e6101c6366004611c85565b60009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6101b66101fc366004611e66565b61061b565b6101b661020f366004611f47565b61070d565b6101b6610222366004611c06565b6107d6565b61023a610235366004611ff1565b6108fd565b60405161010b91906120ed565b6101b6610255366004611c06565b610a55565b6101b6610268366004612100565b610b68565b61012761027b36600461213c565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101b66102c4366004612166565b610b77565b600073ffffffffffffffffffffffffffffffffffffffff8316610373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061043c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b806103a357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146103a3565b60008181526003602052604090208054606091906104a9906121cb565b80601f01602080910402602001604051908101604052809291908181526020018280546104d5906121cb565b80156105225780601f106104f757610100808354040283529160200191610522565b820191906000526020600020905b81548152906001019060200180831161050557829003601f168201915b50505050509050919050565b600082815260046020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146105bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5175657374436861696e546f6b656e3a206e6f7420746f6b656e206f776e6572604482015260640161036a565b60008381526003602052604090206105d58382612269565b50827f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b6106018561048c565b60405161060e9190611d02565b60405180910390a2505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5175657374436861696e546f6b656e3a206e6f7420666163746f727900000000604482015260640161036a565b60009182526004602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff85163314806107365750610736853361027b565b6107c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161036a565b6107cf8585858585610c39565b5050505050565b600081815260046020526040902054819073ffffffffffffffffffffffffffffffffffffffff163314610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5175657374436861696e546f6b656e3a206e6f7420746f6b656e206f776e6572604482015260640161036a565b600061087184846102c9565b905080156108db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5175657374436861696e546f6b656e3a20616c7265616479206d696e74656400604482015260640161036a565b6108f78484600160405180602001604052806000815250610f81565b50505050565b60608151835114610990576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161036a565b6000835167ffffffffffffffff8111156109ac576109ac611d15565b6040519080825280602002602001820160405280156109d5578160200160208202803683370190505b50905060005b8451811015610a4d57610a208582815181106109f9576109f9612383565b6020026020010151858381518110610a1357610a13612383565b60200260200101516102c9565b828281518110610a3257610a32612383565b6020908102919091010152610a46816123e1565b90506109db565b509392505050565b600081815260046020526040902054819073ffffffffffffffffffffffffffffffffffffffff163314610ae4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5175657374436861696e546f6b656e3a206e6f7420746f6b656e206f776e6572604482015260640161036a565b6000610af084846102c9565b905080600114610b5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5175657374436861696e546f6b656e3a20746f6b656e206e6f7420666f756e64604482015260640161036a565b6108f784846001611101565b610b7333838361131f565b5050565b73ffffffffffffffffffffffffffffffffffffffff8516331480610ba05750610ba0853361027b565b610c2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161036a565b6107cf8585858585611472565b8151835114610cca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161036a565b73ffffffffffffffffffffffffffffffffffffffff8416610d6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161036a565b33610d7c8187878787876116be565b60005b8451811015610eec576000858281518110610d9c57610d9c612383565b602002602001015190506000858381518110610dba57610dba612383565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610e87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161036a565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b16825281208054849290610ed1908490612419565b9250508190555050505080610ee5906123e1565b9050610d7f565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610f6392919061242c565b60405180910390a4610f7981878787878761175b565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611024576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161036a565b336000611030856119e5565b9050600061103d856119e5565b905061104e836000898585896116be565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b1684529091528120805487929061108b908490612419565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46110f883600089898989611a30565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161036a565b3360006111b0846119e5565b905060006111bd846119e5565b90506111dd838760008585604051806020016040528060008152506116be565b60008581526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a1684529091529020548481101561129a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161036a565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46040805160208101909152600090526110f8565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161036a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416611515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161036a565b336000611521856119e5565b9050600061152e856119e5565b905061153e8389898585896116be565b60008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c168452909152902054858110156115fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161036a565b60008781526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290611646908490612419565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46116b3848a8a8a8a8a611a30565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615806116f5575073ffffffffffffffffffffffffffffffffffffffff8516155b610f79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5175657374436861696e546f6b656e3a2063616e6e6f74207472616e73666572604482015260640161036a565b73ffffffffffffffffffffffffffffffffffffffff84163b15610f79576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c81906117d2908990899088908890889060040161245a565b6020604051808303816000875af192505050801561182b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611828918101906124c5565b60015b611914576118376124e2565b806308c379a00361188a575061184b6124fe565b80611856575061188c565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036a9190611d02565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161036a565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146110f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161036a565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611a1f57611a1f612383565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610f79576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190611aa790899089908890889088906004016125a6565b6020604051808303816000875af1925050508015611b00575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611afd918101906124c5565b60015b611b0c576118376124e2565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146110f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161036a565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c0157600080fd5b919050565b60008060408385031215611c1957600080fd5b611c2283611bdd565b946020939093013593505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611c5e57600080fd5b50565b600060208284031215611c7357600080fd5b8135611c7e81611c30565b9392505050565b600060208284031215611c9757600080fd5b5035919050565b6000815180845260005b81811015611cc457602081850181015186830182015201611ca8565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611c7e6020830184611c9e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611d8857611d88611d15565b6040525050565b600067ffffffffffffffff831115611da957611da9611d15565b604051611dde60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8701160182611d44565b809150838152848484011115611df357600080fd5b83836020830137600060208583010152509392505050565b60008060408385031215611e1e57600080fd5b82359150602083013567ffffffffffffffff811115611e3c57600080fd5b8301601f81018513611e4d57600080fd5b611e5c85823560208401611d8f565b9150509250929050565b60008060408385031215611e7957600080fd5b82359150611e8960208401611bdd565b90509250929050565b600067ffffffffffffffff821115611eac57611eac611d15565b5060051b60200190565b600082601f830112611ec757600080fd5b81356020611ed482611e92565b604051611ee18282611d44565b83815260059390931b8501820192828101915086841115611f0157600080fd5b8286015b84811015611f1c5780358352918301918301611f05565b509695505050505050565b600082601f830112611f3857600080fd5b611c7e83833560208501611d8f565b600080600080600060a08688031215611f5f57600080fd5b611f6886611bdd565b9450611f7660208701611bdd565b9350604086013567ffffffffffffffff80821115611f9357600080fd5b611f9f89838a01611eb6565b94506060880135915080821115611fb557600080fd5b611fc189838a01611eb6565b93506080880135915080821115611fd757600080fd5b50611fe488828901611f27565b9150509295509295909350565b6000806040838503121561200457600080fd5b823567ffffffffffffffff8082111561201c57600080fd5b818501915085601f83011261203057600080fd5b8135602061203d82611e92565b60405161204a8282611d44565b83815260059390931b850182019282810191508984111561206a57600080fd5b948201945b8386101561208f5761208086611bdd565b8252948201949082019061206f565b965050860135925050808211156120a557600080fd5b50611e5c85828601611eb6565b600081518084526020808501945080840160005b838110156120e2578151875295820195908201906001016120c6565b509495945050505050565b602081526000611c7e60208301846120b2565b6000806040838503121561211357600080fd5b61211c83611bdd565b91506020830135801515811461213157600080fd5b809150509250929050565b6000806040838503121561214f57600080fd5b61215883611bdd565b9150611e8960208401611bdd565b600080600080600060a0868803121561217e57600080fd5b61218786611bdd565b945061219560208701611bdd565b93506040860135925060608601359150608086013567ffffffffffffffff8111156121bf57600080fd5b611fe488828901611f27565b600181811c908216806121df57607f821691505b602082108103612218577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561226457600081815260208120601f850160051c810160208610156122455750805b601f850160051c820191505b81811015610f7957828155600101612251565b505050565b815167ffffffffffffffff81111561228357612283611d15565b6122978161229184546121cb565b8461221e565b602080601f8311600181146122ea57600084156122b45750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610f79565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561233757888601518255948401946001909101908401612318565b508582101561237357878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612412576124126123b2565b5060010190565b808201808211156103a3576103a36123b2565b60408152600061243f60408301856120b2565b828103602084015261245181856120b2565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261249360a08301866120b2565b82810360608401526124a581866120b2565b905082810360808401526124b98185611c9e565b98975050505050505050565b6000602082840312156124d757600080fd5b8151611c7e81611c30565b600060033d11156124fb5760046000803e5060005160e01c5b90565b600060443d101561250c5790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff816024840111818411171561255a57505050505090565b82850191508151818111156125725750505050505090565b843d870101602082850101111561258c5750505050505090565b61259b60208286010187611d44565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a060808301526125eb60a0830184611c9e565b97965050505050505056fea2646970667358221220305ccc1bd6e2e7ff68bcf46cc768798ad8f7062619bbfee2f8a9316b28d7b30c64736f6c63430008100033';

type QuestChainTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: QuestChainTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class QuestChainToken__factory extends ContractFactory {
  constructor(...args: QuestChainTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<QuestChainToken> {
    return super.deploy(overrides || {}) as Promise<QuestChainToken>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): QuestChainToken {
    return super.attach(address) as QuestChainToken;
  }
  override connect(signer: Signer): QuestChainToken__factory {
    return super.connect(signer) as QuestChainToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuestChainTokenInterface {
    return new utils.Interface(_abi) as QuestChainTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): QuestChainToken {
    return new Contract(address, _abi, signerOrProvider) as QuestChainToken;
  }
}