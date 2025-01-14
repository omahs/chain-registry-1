import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stargaze',
  assets: [
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ustars',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      }
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
          exponent: 0
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }]
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
          exponent: 0
        }, {
          denom: 'GAZE',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
          exponent: 0
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }]
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
          exponent: 0
        }, {
          denom: 'OHH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [{
          denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
          exponent: 0
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      base: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }]
    },
    {
      description: 'LAB - Everything is an Experiment',
      extended_description: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denom_units: [{
          denom: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
            channel_id: 'channel-75'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          }
        }]
    }
  ]
};
export default info;