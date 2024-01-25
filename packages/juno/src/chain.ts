import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.junonetwork.io/',
  pretty_name: 'Juno',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujuno',
        fixed_min_gas_price: 0.075,
        low_gas_price: 0.075,
        average_gas_price: 0.1,
        high_gas_price: 0.125
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixed_min_gas_price: 0.003,
        low_gas_price: 0.003,
        average_gas_price: 0.0035,
        high_gas_price: 0.004
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujuno'
      }
    ]
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v18.1.0',
    compatible_versions: ['v18.1.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/CosmosContracts/juno/releases/download/v18.1.0/junod'
    },
    cosmos_sdk_version: '0.47.5',
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    cosmwasm_version: '0.45.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.3.1',
    genesis: {
      genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
    },
    versions: [
      {
        name: 'v13',
        proposal: 271,
        height: 7374801,
        recommended_version: 'v13.0.0',
        compatible_versions: ['v13.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v13.0.0/junod'
        },
        cosmos_sdk_version: '0.45.14',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint v0.34.26'
        },
        cosmwasm_version: '0.30.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.0',
        next_version_name: 'v14'
      },
      {
        name: 'v14',
        proposal: 282,
        height: 7875721,
        recommended_version: 'v14.1.0',
        compatible_versions: ['v14.0.0', 'v14.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v14.1.0/junod'
        },
        cosmos_sdk_version: '0.45.15',
        consensus: {
          type: 'cometbft',
          version: 'mev-cometbft v0.34.27-mev.18'
        },
        cosmwasm_version: '0.31.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.0',
        next_version_name: 'v15'
      },
      {
        name: 'v15',
        proposal: 295,
        height: 8577241,
        recommended_version: 'v15.0.0',
        compatible_versions: ['v15.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v15.0.0/junod'
        },
        cosmos_sdk_version: '0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'mev-cometbft v0.34.27-mev.18'
        },
        cosmwasm_version: '0.31.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v4.3.1',
        next_version_name: 'v16'
      },
      {
        name: 'v16',
        proposal: 311,
        height: 9481382,
        recommended_version: 'v16.0.2',
        compatible_versions: ['v16.0.0', 'v16.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v16.0.2/junod'
        },
        cosmos_sdk_version: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasm_version: '0.40.2',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.2.0',
        next_version_name: 'v17'
      },
      {
        name: 'v17',
        proposal: 317,
        height: 10078449,
        recommended_version: 'v17.1.1',
        compatible_versions: ['v17.0.0', 'v17.1.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v17.1.1/junod'
        },
        cosmos_sdk_version: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasm_version: '0.41.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.0',
        next_version_name: 'v18'
      },
      {
        name: 'v18',
        proposal: 325,
        height: 12265007,
        recommended_version: 'v18.1.0',
        compatible_versions: ['v18.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/CosmosContracts/juno/releases/download/v18.1.0/junod'
        },
        cosmos_sdk_version: '0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: ''
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
  },
  description:
    'Juno is a completely community owned and operated smart contract platform.',
  peers: {
    seeds: [
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:12656',
        provider: 'RHINO'
      },
      {
        id: '90b09362d9ce3845096c4938eea0dba682b0ad2c',
        address: 'juno-seed-new.blockpane.com:26656'
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:12656',
        provider: 'Polkachu'
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:12656',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        id: 'ea67180befe4d9ca71142d21ada8ff58cc08f71c',
        address: 'seeds.goldenratiostaking.net:1627',
        provider: 'Golden Ratio Staking'
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'juno-mainnet-seed.autostake.com:27136',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:12656',
        provider: 'WhisperNode 🤐'
      },
      {
        id: '509f6dbae3133a9df177edea051b31e1210b117e',
        address: 'seed-juno-01.stakeflow.io:2307',
        provider: 'Stakeflow'
      },
      {
        id: '77c33f62d34c20a0e795240f4548ab741ea558d9',
        address: '138.201.21.121:24956',
        provider: 'Validatrium'
      }
    ],
    persistent_peers: [
      {
        id: '7f593757c0cde8972ce929381d8ac8e446837811',
        address: '178.18.255.244:26656'
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'juno-mainnet-peer.autostake.com:27136',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        id: '3ee2034cf0180e4d50f7b3ed952472add3316faf',
        address: 'juno.peer.stavr.tech:1066',
        provider: '🔥STAVR🔥'
      },
      {
        id: '509f6dbae3133a9df177edea051b31e1210b117e',
        address: 'peer-juno-01.stakeflow.io:2307',
        provider: 'Stakeflow'
      },
      {
        id: '397281b9fa745482127093f08ac05724c2b8d6f8',
        address: '65.108.195.213:33656',
        provider: 'StakeTown'
      },
      {
        id: '77c33f62d34c20a0e795240f4548ab741ea558d9',
        address: '138.201.21.121:24956',
        provider: 'Validatrium'
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-juno.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'http://juno.rpc.m.stavr.tech:1067',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://juno-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://juno-rpc.icycro.org',
        provider: 'IcyCRO 🧊'
      },
      {
        address: 'https://rpc.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-rpc.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc-juno.mainnet.validatrium.club:443',
        provider: 'Validatrium'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    rest: [
      {
        address: 'https://lcd-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-api.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rest-juno.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://api-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://lcd-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://lcd-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    grpc: [
      {
        address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'juno-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      },
      {
        address: 'http://juno.grpc.m.stavr.tech:504',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-juno.kingnodes.com:443',
        provider: 'kingnodes 👑'
      },
      {
        address: 'grpc-juno.cosmos-spaces.cloud:4830',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'grpc-juno.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'juno-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://167.235.211.168:9091',
        provider: 'CommunityStaking'
      },
      {
        address: 'grpc-juno-01.stakeflow.io:2302',
        provider: 'Stakeflow'
      },
      {
        address: 'juno-grpc.w3coins.io:12690',
        provider: 'w3coins'
      },
      {
        address: 'juno-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'juno-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: '138.201.21.121:24990',
        provider: 'Validatrium'
      },
      {
        address: 'juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/juno',
      tx_page: 'https://app.ezstaking.io/juno/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/juno/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      tx_page: 'https://ping.pub/juno/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://juno.explorers.guru',
      tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/juno',
      tx_page: 'https://www.mintscan.io/juno/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/juno/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      tx_page: 'https://atomscan.com/juno/transactions/${txHash}',
      account_page: 'https://atomscan.com/juno/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/juno',
      tx_page: 'https://explorer.stavr.tech/juno/transactions/${txHash}',
      account_page:
        'https://explorer.stavr.tech/juno/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/juno',
      tx_page: 'https://explorer.tcnetwork.io/juno/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/juno',
      account_page: 'https://stakeflow.io/juno/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
    }
  ]
};
export default chain;
