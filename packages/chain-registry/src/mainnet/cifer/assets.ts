import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cifer',
  assets: [{
      description: 'Decentralized Machine Learning',
      denom_units: [{
          denom: 'ucif',
          exponent: 0
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ucif',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
        }],
      socials: {
        website: 'http://cifer.ai/',
        twitter: 'https://twitter.com/cifer_ai'
      }
    }]
};
export default info;