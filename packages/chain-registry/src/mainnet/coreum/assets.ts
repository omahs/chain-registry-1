import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'coreum',
  assets: [{
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ucore',
          exponent: 0
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ucore',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      }
    }, {
      description: 'XRP bridged from XRPL',
      denom_units: [{
          denom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
          exponent: 0,
          aliases: ['drop']
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      base: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'xrpl',
            base_denom: 'drop'
          },
          provider: 'Coreum'
        }],
      images: [{
          image_sync: {
            chain_name: 'xrpl',
            base_denom: 'drop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      }
    }]
};
export default info;