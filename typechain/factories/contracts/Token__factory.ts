/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Token, TokenInterface } from "../../contracts/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BURN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINT_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200343238038062003432833981810160405281019062000037919062000631565b670de0b6b3a7640000816200004d919062000710565b848481600390816200006091906200099c565b5080600490816200007291906200099c565b50505060008111620000bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b29062000ae4565b60405180910390fd5b806080818152505050620000f67f154c00819833dac601ee5ddded6fda79d9d8b506b911b3dbd54cdb95fe6c3686336200017160201b60201c565b620001287fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa22336200017160201b60201c565b808211620001675762000166620001446200018760201b60201c565b670de0b6b3a7640000846200015a919062000710565b6200018f60201b60201c565b5b5050505062000be1565b620001838282620002fc60201b60201c565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000201576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f89062000b56565b60405180910390fd5b6200021560008383620003ee60201b60201c565b806002600082825462000229919062000b78565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002dc919062000bc4565b60405180910390a3620002f860008383620003f360201b60201c565b5050565b6200030e8282620003f860201b60201c565b620003ea5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200038f6200018760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b505050565b505050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004cc8262000481565b810181811067ffffffffffffffff82111715620004ee57620004ed62000492565b5b80604052505050565b60006200050362000463565b9050620005118282620004c1565b919050565b600067ffffffffffffffff82111562000534576200053362000492565b5b6200053f8262000481565b9050602081019050919050565b60005b838110156200056c5780820151818401526020810190506200054f565b60008484015250505050565b60006200058f620005898462000516565b620004f7565b905082815260208101848484011115620005ae57620005ad6200047c565b5b620005bb8482856200054c565b509392505050565b600082601f830112620005db57620005da62000477565b5b8151620005ed84826020860162000578565b91505092915050565b6000819050919050565b6200060b81620005f6565b81146200061757600080fd5b50565b6000815190506200062b8162000600565b92915050565b600080600080608085870312156200064e576200064d6200046d565b5b600085015167ffffffffffffffff8111156200066f576200066e62000472565b5b6200067d87828801620005c3565b945050602085015167ffffffffffffffff811115620006a157620006a062000472565b5b620006af87828801620005c3565b9350506040620006c2878288016200061a565b9250506060620006d5878288016200061a565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200071d82620005f6565b91506200072a83620005f6565b92508282026200073a81620005f6565b91508282048414831517620007545762000753620006e1565b5b5092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620007ae57607f821691505b602082108103620007c457620007c362000766565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200082e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620007ef565b6200083a8683620007ef565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200087d620008776200087184620005f6565b62000852565b620005f6565b9050919050565b6000819050919050565b62000899836200085c565b620008b1620008a88262000884565b848454620007fc565b825550505050565b600090565b620008c8620008b9565b620008d58184846200088e565b505050565b5b81811015620008fd57620008f1600082620008be565b600181019050620008db565b5050565b601f8211156200094c576200091681620007ca565b6200092184620007df565b8101602085101562000931578190505b620009496200094085620007df565b830182620008da565b50505b505050565b600082821c905092915050565b6000620009716000198460080262000951565b1980831691505092915050565b60006200098c83836200095e565b9150826002028217905092915050565b620009a7826200075b565b67ffffffffffffffff811115620009c357620009c262000492565b5b620009cf825462000795565b620009dc82828562000901565b600060209050601f83116001811462000a145760008415620009ff578287015190505b62000a0b85826200097e565b86555062000a7b565b601f19841662000a2486620007ca565b60005b8281101562000a4e5784890151825560018201915060208501945060208101905062000a27565b8683101562000a6e578489015162000a6a601f8916826200095e565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332304361707065643a2063617020697320300000000000000000000000600082015250565b600062000acc60158362000a83565b915062000ad98262000a94565b602082019050919050565b6000602082019050818103600083015262000aff8162000abd565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000b3e601f8362000a83565b915062000b4b8262000b06565b602082019050919050565b6000602082019050818103600083015262000b718162000b2f565b9050919050565b600062000b8582620005f6565b915062000b9283620005f6565b925082820190508082111562000bad5762000bac620006e1565b5b92915050565b62000bbe81620005f6565b82525050565b600060208201905062000bdb600083018462000bb3565b92915050565b60805161283562000bfd600039600061066401526128356000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806340c10f19116100c3578063a457c2d71161007c578063a457c2d7146103c6578063a9059cbb146103f6578063b930908f14610426578063d547741f14610444578063dd62ed3e14610460578063e9a9c850146104905761014d565b806340c10f19146102f257806370a082311461030e57806391d148541461033e57806395d89b411461036e5780639dc29fac1461038c578063a217fddf146103a85761014d565b8063248a9ca311610115578063248a9ca31461021e5780632f2ff15d1461024e578063313ce5671461026a578063355274ea1461028857806336568abe146102a657806339509351146102c25761014d565b806301ffc9a71461015257806306fdde0314610182578063095ea7b3146101a057806318160ddd146101d057806323b872dd146101ee575b600080fd5b61016c60048036038101906101679190611998565b6104ae565b60405161017991906119e0565b60405180910390f35b61018a610528565b6040516101979190611a8b565b60405180910390f35b6101ba60048036038101906101b59190611b41565b6105ba565b6040516101c791906119e0565b60405180910390f35b6101d86105dd565b6040516101e59190611b90565b60405180910390f35b61020860048036038101906102039190611bab565b6105e7565b60405161021591906119e0565b60405180910390f35b61023860048036038101906102339190611c34565b610616565b6040516102459190611c70565b60405180910390f35b61026860048036038101906102639190611c8b565b610636565b005b610272610657565b60405161027f9190611ce7565b60405180910390f35b610290610660565b60405161029d9190611b90565b60405180910390f35b6102c060048036038101906102bb9190611c8b565b610688565b005b6102dc60048036038101906102d79190611b41565b61070b565b6040516102e991906119e0565b60405180910390f35b61030c60048036038101906103079190611b41565b610742565b005b61032860048036038101906103239190611d02565b610807565b6040516103359190611b90565b60405180910390f35b61035860048036038101906103539190611c8b565b61084f565b60405161036591906119e0565b60405180910390f35b6103766108ba565b6040516103839190611a8b565b60405180910390f35b6103a660048036038101906103a19190611b41565b61094c565b005b6103b0610a11565b6040516103bd9190611c70565b60405180910390f35b6103e060048036038101906103db9190611b41565b610a18565b6040516103ed91906119e0565b60405180910390f35b610410600480360381019061040b9190611b41565b610a8f565b60405161041d91906119e0565b60405180910390f35b61042e610ab2565b60405161043b9190611c70565b60405180910390f35b61045e60048036038101906104599190611c8b565b610ad6565b005b61047a60048036038101906104759190611d2f565b610af7565b6040516104879190611b90565b60405180910390f35b610498610b7e565b6040516104a59190611c70565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610521575061052082610ba2565b5b9050919050565b60606003805461053790611d9e565b80601f016020809104026020016040519081016040528092919081815260200182805461056390611d9e565b80156105b05780601f10610585576101008083540402835291602001916105b0565b820191906000526020600020905b81548152906001019060200180831161059357829003601f168201915b5050505050905090565b6000806105c5610c0c565b90506105d2818585610c14565b600191505092915050565b6000600254905090565b6000806105f2610c0c565b90506105ff858285610ddd565b61060a858585610e69565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b61063f82610616565b610648816110df565b61065283836110f3565b505050565b60006012905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b610690610c0c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490611e41565b60405180910390fd5b61070782826111d4565b5050565b600080610716610c0c565b90506107378185856107288589610af7565b6107329190611e90565b610c14565b600191505092915050565b61076c7f154c00819833dac601ee5ddded6fda79d9d8b506b911b3dbd54cdb95fe6c36863361084f565b6107ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a290611f36565b60405180910390fd5b6107b582826112b6565b8173ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885826040516107fb9190611b90565b60405180910390a25050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6060600480546108c990611d9e565b80601f01602080910402602001604051908101604052809291908181526020018280546108f590611d9e565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b5050505050905090565b6109767fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa223361084f565b6109b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ac90611fc8565b60405180910390fd5b6109bf8282611320565b8173ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca582604051610a059190611b90565b60405180910390a25050565b6000801b81565b600080610a23610c0c565b90506000610a318286610af7565b905083811015610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d9061205a565b60405180910390fd5b610a838286868403610c14565b60019250505092915050565b600080610a9a610c0c565b9050610aa7818585610e69565b600191505092915050565b7fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa2281565b610adf82610616565b610ae8816110df565b610af283836111d4565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b7f154c00819833dac601ee5ddded6fda79d9d8b506b911b3dbd54cdb95fe6c368681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7a906120ec565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce99061217e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610dd09190611b90565b60405180910390a3505050565b6000610de98484610af7565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610e635781811015610e55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4c906121ea565b60405180910390fd5b610e628484848403610c14565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecf9061227c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3e9061230e565b60405180910390fd5b610f528383836114ed565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610fd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcf906123a0565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110c69190611b90565b60405180910390a36110d98484846114f2565b50505050565b6110f0816110eb610c0c565b6114f7565b50565b6110fd828261084f565b6111d05760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611175610c0c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6111de828261084f565b156112b25760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611257610c0c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6112be610660565b816112c76105dd565b6112d19190611e90565b1115611312576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113099061240c565b60405180910390fd5b61131c828261157c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361138f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113869061249e565b60405180910390fd5b61139b826000836114ed565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141890612530565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114d49190611b90565b60405180910390a36114e8836000846114f2565b505050565b505050565b505050565b611501828261084f565b6115785761150e816116d2565b61151c8360001c60206116ff565b60405160200161152d929190612624565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f9190611a8b565b60405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e2906126aa565b60405180910390fd5b6115f7600083836114ed565b80600260008282546116099190611e90565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516116ba9190611b90565b60405180910390a36116ce600083836114f2565b5050565b60606116f88273ffffffffffffffffffffffffffffffffffffffff16601460ff166116ff565b9050919050565b60606000600283600261171291906126ca565b61171c9190611e90565b67ffffffffffffffff8111156117355761173461270c565b5b6040519080825280601f01601f1916602001820160405280156117675781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061179f5761179e61273b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106118035761180261273b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261184391906126ca565b61184d9190611e90565b90505b60018111156118ed577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061188f5761188e61273b565b5b1a60f81b8282815181106118a6576118a561273b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806118e69061276a565b9050611850565b5060008414611931576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611928906127df565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61197581611940565b811461198057600080fd5b50565b6000813590506119928161196c565b92915050565b6000602082840312156119ae576119ad61193b565b5b60006119bc84828501611983565b91505092915050565b60008115159050919050565b6119da816119c5565b82525050565b60006020820190506119f560008301846119d1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a35578082015181840152602081019050611a1a565b60008484015250505050565b6000601f19601f8301169050919050565b6000611a5d826119fb565b611a678185611a06565b9350611a77818560208601611a17565b611a8081611a41565b840191505092915050565b60006020820190508181036000830152611aa58184611a52565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ad882611aad565b9050919050565b611ae881611acd565b8114611af357600080fd5b50565b600081359050611b0581611adf565b92915050565b6000819050919050565b611b1e81611b0b565b8114611b2957600080fd5b50565b600081359050611b3b81611b15565b92915050565b60008060408385031215611b5857611b5761193b565b5b6000611b6685828601611af6565b9250506020611b7785828601611b2c565b9150509250929050565b611b8a81611b0b565b82525050565b6000602082019050611ba56000830184611b81565b92915050565b600080600060608486031215611bc457611bc361193b565b5b6000611bd286828701611af6565b9350506020611be386828701611af6565b9250506040611bf486828701611b2c565b9150509250925092565b6000819050919050565b611c1181611bfe565b8114611c1c57600080fd5b50565b600081359050611c2e81611c08565b92915050565b600060208284031215611c4a57611c4961193b565b5b6000611c5884828501611c1f565b91505092915050565b611c6a81611bfe565b82525050565b6000602082019050611c856000830184611c61565b92915050565b60008060408385031215611ca257611ca161193b565b5b6000611cb085828601611c1f565b9250506020611cc185828601611af6565b9150509250929050565b600060ff82169050919050565b611ce181611ccb565b82525050565b6000602082019050611cfc6000830184611cd8565b92915050565b600060208284031215611d1857611d1761193b565b5b6000611d2684828501611af6565b91505092915050565b60008060408385031215611d4657611d4561193b565b5b6000611d5485828601611af6565b9250506020611d6585828601611af6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611db657607f821691505b602082108103611dc957611dc8611d6f565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611e2b602f83611a06565b9150611e3682611dcf565b604082019050919050565b60006020820190508181036000830152611e5a81611e1e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e9b82611b0b565b9150611ea683611b0b565b9250828201905080821115611ebe57611ebd611e61565b5b92915050565b7f4d79546f6b656e3a206d7573742068617665204d494e545f524f4c4520746f2060008201527f6d696e7400000000000000000000000000000000000000000000000000000000602082015250565b6000611f20602483611a06565b9150611f2b82611ec4565b604082019050919050565b60006020820190508181036000830152611f4f81611f13565b9050919050565b7f4d79546f6b656e3a206d7573742068617665204255524e5f524f4c4520746f2060008201527f6275726e00000000000000000000000000000000000000000000000000000000602082015250565b6000611fb2602483611a06565b9150611fbd82611f56565b604082019050919050565b60006020820190508181036000830152611fe181611fa5565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612044602583611a06565b915061204f82611fe8565b604082019050919050565b6000602082019050818103600083015261207381612037565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006120d6602483611a06565b91506120e18261207a565b604082019050919050565b60006020820190508181036000830152612105816120c9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612168602283611a06565b91506121738261210c565b604082019050919050565b600060208201905081810360008301526121978161215b565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006121d4601d83611a06565b91506121df8261219e565b602082019050919050565b60006020820190508181036000830152612203816121c7565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612266602583611a06565b91506122718261220a565b604082019050919050565b6000602082019050818103600083015261229581612259565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006122f8602383611a06565b91506123038261229c565b604082019050919050565b60006020820190508181036000830152612327816122eb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061238a602683611a06565b91506123958261232e565b604082019050919050565b600060208201905081810360008301526123b98161237d565b9050919050565b7f45524332304361707065643a2063617020657863656564656400000000000000600082015250565b60006123f6601983611a06565b9150612401826123c0565b602082019050919050565b60006020820190508181036000830152612425816123e9565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612488602183611a06565b91506124938261242c565b604082019050919050565b600060208201905081810360008301526124b78161247b565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061251a602283611a06565b9150612525826124be565b604082019050919050565b600060208201905081810360008301526125498161250d565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000612591601783612550565b915061259c8261255b565b601782019050919050565b60006125b2826119fb565b6125bc8185612550565b93506125cc818560208601611a17565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b600061260e601183612550565b9150612619826125d8565b601182019050919050565b600061262f82612584565b915061263b82856125a7565b915061264682612601565b915061265282846125a7565b91508190509392505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612694601f83611a06565b915061269f8261265e565b602082019050919050565b600060208201905081810360008301526126c381612687565b9050919050565b60006126d582611b0b565b91506126e083611b0b565b92508282026126ee81611b0b565b9150828204841483151761270557612704611e61565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061277582611b0b565b91506000820361278857612787611e61565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006127c9602083611a06565b91506127d482612793565b602082019050919050565b600060208201905081810360008301526127f8816127bc565b905091905056fea26469706673582212201a277e18702ea826c0f9ae13028fd37ac16e0807e946cef0840756f5aa207c7364736f6c63430008130033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    cap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      cap,
      overrides || {}
    ) as Promise<Token>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    cap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      cap,
      overrides || {}
    );
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}