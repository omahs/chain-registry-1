import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bluzelle',
  assets: [
    {
      description: 'The native token of Bluzelle',
      denom_units: [{
          denom: 'ubnt',
          exponent: 0
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      base: 'ubnt',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      coingecko_id: 'bluzelle',
      keywords: ['bluzelle', 'game'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }],
      socials: {
        website: 'http://bluzelle.com/',
        twitter: 'https://twitter.com/BluzelleHQ'
      }
    },
    {
      description: 'The ELT token of Bluzelle\'s Gamma 4 Gaming Ecosystem',
      denom_units: [{
          denom: 'uelt',
          exponent: 0
        }, {
          denom: 'elt',
          exponent: 6
        }],
      base: 'uelt',
      name: 'ELT',
      display: 'elt',
      symbol: 'ELT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
      },
      coingecko_id: '',
      keywords: ['elt'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
        }]
    },
    {
      description: 'The game token of Bluzelle\'s Gamma 4 Gaming Ecosystem',
      denom_units: [{
          denom: 'ug4',
          exponent: 0
        }, {
          denom: 'g4',
          exponent: 6
        }],
      base: 'ug4',
      name: 'G4',
      display: 'g4',
      symbol: 'G4',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
      },
      coingecko_id: '',
      keywords: ['g4'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
        }]
    }
  ]
};
export default info;