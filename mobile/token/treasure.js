
var CONTRACT_ADDRESS = '0x8d3d150eb2569bd0b031da1a4cc1c9ae5b34d5f6';//
var POOL_NAME='Consensus Pool';
var NOTICE='Security First, we will never change the contract code, our KYC info have been provided to Conflux fundation team.<br/> The earlier you stake, the reward will be higher.';

var CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "previous",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "current",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "UnnormalReward",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ClaimInterest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "DecreasePoSStake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "IncreasePoSStake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "ratio",
          "type": "uint32"
        }
      ],
      "name": "RatioChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "WithdrawStake",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        }
      ],
      "name": "_poolAPY",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_poolLockPeriod",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_poolName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_poolRegisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "_posRegisterIncreaseStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "indentifier",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "blsPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "vrfPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes[2]",
          "name": "blsPubKeyProof",
          "type": "bytes[2]"
        }
      ],
      "name": "_posRegisterRegister",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "_posRegisterRetire",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "_stakingDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "_stakingWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimAllInterest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "claimInterest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "collectUserLastVotePowerSectionPagination",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "collectUserLatestInterestPagination",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sectionCount",
          "type": "uint256"
        }
      ],
      "name": "collectUserLatestSectionsInterest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "decreaseStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "increaseStake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolAPY",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolSummary",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "available",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "interest",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalInterest",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolUserShareRatio",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "posAddress",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "indentifier",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "blsPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "vrfPubKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes[2]",
          "name": "blsPubKeyProof",
          "type": "bytes[2]"
        }
      ],
      "name": "register",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        }
      ],
      "name": "setCfxCountOfOneVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "period",
          "type": "uint64"
        }
      ],
      "name": "setLockPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "setPoolName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "ratio",
          "type": "uint32"
        }
      ],
      "name": "setPoolUserShareRatio",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "offset",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "userInQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "votePower",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endBlock",
              "type": "uint64"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "userInQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "votePower",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endBlock",
              "type": "uint64"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "userInterest",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "userOutQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "votePower",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endBlock",
              "type": "uint64"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "offset",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "name": "userOutQueue2",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "votePower",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "endBlock",
              "type": "uint64"
            }
          ],
          "internalType": "struct VotePowerQueue.QueueNode[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "userSummary",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "votes",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "available",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "locked",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "unlocked",
              "type": "uint64"
            },
            {
              "internalType": "uint256",
              "name": "claimedInterest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "currentInterest",
              "type": "uint256"
            }
          ],
          "internalType": "struct PoSPool.UserSummary",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "votePower",
          "type": "uint64"
        }
      ],
      "name": "withdrawStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];