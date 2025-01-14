import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'composable',
  assets: [
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          provider: 'Picasso'
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      socials: {
        website: 'https://picasso.xyz/',
        twitter: 'https://twitter.com/picasso_network'
      }
    },
    {
      description: 'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [{
          denom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
          exponent: 0,
          aliases: ['4']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '4',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description: 'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [{
          denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
          exponent: 0,
          aliases: ['79228162514264337593543950342']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description: 'The native staking and governance token of Statemine parachain.',
      denom_units: [{
          denom: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
          exponent: 0,
          aliases: ['130']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '130',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/130'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130'
          }
        }]
    },
    {
      description: 'The native fee, staking and governance token of the Tinkernet Parachain.',
      denom_units: [{
          denom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
          exponent: 0,
          aliases: ['2125']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
      name: 'TNKR',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '2125',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/2125'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '2125'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    },
    {
      description: 'The native token of Ethereum, bridged via IBC.',
      denom_units: [{
          denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/wei'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
      denom_units: [{
          denom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
      name: 'Dai',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'The governance token of the Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
          exponent: 0,
          aliases: ['fxs-wei']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
      name: 'Frax Shares',
      display: 'fxs',
      symbol: 'FXS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
        }]
    },
    {
      description: 'The first fractional-algorithmic stablecoin.',
      denom_units: [{
          denom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
          exponent: 0,
          aliases: ['frxeth-wei']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
        }]
    },
    {
      description: 'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
      denom_units: [{
          denom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
      name: 'Frax Staked Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
      denom_units: [{
          denom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
          exponent: 0,
          aliases: ['sfrax-wei']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
        }]
    },
    {
      description: 'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
      denom_units: [{
          denom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
      name: 'Tether',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    }
  ]
};
export default info;