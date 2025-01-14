import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'planqtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Planq Atlas Testnet',
  chain_id: 'planq_7077-1',
  bech32_prefix: 'plq',
  daemon_name: 'planqd',
  node_home: '$HOME/.planqd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'atplanq',
        fixed_min_gas_price: 20000000000,
        low_gas_price: 30000000000,
        average_gas_price: 35000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atplanq'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.46.3'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }],
    rest: [{
        address: 'https://rest-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_api.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }],
    grpc: [{
        address: 'https://grpc-atlas.planq.network',
        provider: 'Planq Network'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://evm-rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_evm.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }]
  },
  explorers: [
    {
      kind: 'EVM',
      url: 'https://evm-atlas.planq.network',
      tx_page: 'https://evm-atlas.planq.network/tx/${txHash}'
    },
    {
      kind: 'Konsortech',
      url: 'https://testnet-explorer.konsortech.xyz/planq',
      tx_page: 'https://testnet-explorer.konsortech.xyz/planq/tx/${txHash}'
    },
    {
      kind: 'WMWL',
      url: 'https://explorer.whenmoonwhenlambo.money/planq-testnet',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/planq-testnet/tx/${txHash}'
    }
  ]
};
export default info;