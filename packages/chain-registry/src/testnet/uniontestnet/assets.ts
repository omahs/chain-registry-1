import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'uniontestnet',
  assets: [
    {
      description: 'Union native token',
      denom_units: [
        {
          denom: 'muno',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'uno',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'muno',
      name: 'Union',
      display: 'uno',
      symbol: 'UNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
      },
      coingecko_id: '',
      keywords: ['staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png'
        }
      ]
    }
  ]
};
export default info;
