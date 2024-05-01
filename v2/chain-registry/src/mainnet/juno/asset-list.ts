import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'juno',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ujuno',
          exponent: 0
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ujuno',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingeckoId: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'ATOM on Juno',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-207'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denomUnits: [{
          denom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
          exponent: 0
        }, {
          denom: 'neta',
          exponent: 6
        }],
      base: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingeckoId: 'neta',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denomUnits: [{
          denom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
          exponent: 0
        }, {
          denom: 'marble',
          exponent: 3
        }],
      base: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      coingeckoId: 'marble',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      typeAsset: 'cw20',
      address: 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denomUnits: [{
          denom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
          exponent: 0
        }, {
          denom: 'hope',
          exponent: 6
        }],
      base: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      coingeckoId: 'hope-galaxy',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      typeAsset: 'cw20',
      address: 'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denomUnits: [{
          denom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
          exponent: 0
        }, {
          denom: 'rac',
          exponent: 6
        }],
      base: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingeckoId: 'racoon',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denomUnits: [{
          denom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
          exponent: 0
        }, {
          denom: 'block',
          exponent: 6
        }],
      base: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      typeAsset: 'cw20',
      address: 'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denomUnits: [{
          denom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
          exponent: 0,
          aliases: ['dhk']
        }],
      base: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }]
    },
    {
      description: 'Token governance for Junoswap',
      typeAsset: 'cw20',
      address: 'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denomUnits: [{
          denom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
          exponent: 0
        }, {
          denom: 'raw',
          exponent: 6
        }],
      base: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      coingeckoId: 'junoswap-raw-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      typeAsset: 'cw20',
      address: 'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denomUnits: [{
          denom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
          exponent: 0
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      base: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }]
    },
    {
      description: 'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.',
      typeAsset: 'cw20',
      address: 'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denomUnits: [{
          denom: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
          exponent: 0
        }, {
          denom: 'hns',
          exponent: 6
        }],
      base: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      typeAsset: 'cw20',
      address: 'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denomUnits: [{
          denom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
          exponent: 0
        }, {
          denom: 'joe',
          exponent: 6
        }],
      base: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }]
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      typeAsset: 'cw20',
      address: 'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denomUnits: [{
          denom: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
          exponent: 0
        }, {
          denom: 'dla',
          exponent: 6
        }],
      base: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      typeAsset: 'cw20',
      address: 'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denomUnits: [{
          denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
          exponent: 0
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      typeAsset: 'cw20',
      address: 'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denomUnits: [{
          denom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
          exponent: 0
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      base: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }]
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denomUnits: [{
          denom: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
          exponent: 0
        }, {
          denom: 'hole',
          exponent: 6
        }],
      base: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      typeAsset: 'cw20',
      address: 'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denomUnits: [{
          denom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
          exponent: 0
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      base: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      coingeckoId: 'stakeeasy-juno-derivative',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      typeAsset: 'cw20',
      address: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denomUnits: [{
          denom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
          exponent: 0
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      base: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      coingeckoId: 'stakeeasy-bjuno',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      typeAsset: 'cw20',
      address: 'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denomUnits: [{
          denom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
          exponent: 0
        }, {
          denom: 'solar',
          exponent: 6
        }],
      base: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }]
    },
    {
      description: 'StakeEasy governance token',
      typeAsset: 'cw20',
      address: 'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denomUnits: [{
          denom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
          exponent: 0
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      base: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denomUnits: [{
          denom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
          exponent: 0
        }, {
          denom: 'muse',
          exponent: 6
        }],
      base: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }]
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denomUnits: [{
          denom: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
          exponent: 0
        }, {
          denom: 'loop',
          exponent: 6
        }],
      base: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      coingeckoId: 'loop',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
        }]
    },
    {
      description: 'The deprecated cw20 token for Fanfury on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denomUnits: [{
          denom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
          exponent: 0
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.legacy',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      coingeckoId: 'fanfury',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denomUnits: [{
          denom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
          exponent: 0
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      base: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      coingeckoId: 'posthuman',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      typeAsset: 'cw20',
      address: 'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denomUnits: [{
          denom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
          exponent: 0
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      base: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      coingeckoId: 'hopers-io',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }]
    },
    {
      description: 'RED',
      typeAsset: 'cw20',
      address: 'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denomUnits: [{
          denom: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
          exponent: 0
        }, {
          denom: 'red',
          exponent: 6
        }],
      base: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
        }]
    },
    {
      description: 'BLUE',
      typeAsset: 'cw20',
      address: 'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denomUnits: [{
          denom: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
          exponent: 0
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      typeAsset: 'cw20',
      address: 'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denomUnits: [{
          denom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
          exponent: 0
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      base: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      coingeckoId: 'wynd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }]
    },
    {
      description: 'Bored APE IBC club token',
      typeAsset: 'cw20',
      address: 'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denomUnits: [{
          denom: 'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
          exponent: 0
        }, {
          denom: 'banana',
          exponent: 6
        }],
      base: 'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
        }]
    },
    {
      description: 'nRide Token',
      typeAsset: 'cw20',
      address: 'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denomUnits: [{
          denom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
          exponent: 0
        }, {
          denom: 'nride',
          exponent: 6
        }],
      base: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      typeAsset: 'cw20',
      address: 'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denomUnits: [{
          denom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
          exponent: 0
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      base: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      typeAsset: 'cw20',
      address: 'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denomUnits: [{
          denom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
          exponent: 0
        }, {
          denom: 'jape',
          exponent: 6
        }],
      base: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }]
    },
    {
      description: 'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      typeAsset: 'cw20',
      address: 'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denomUnits: [{
          denom: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
          exponent: 0
        }, {
          denom: 'catom',
          exponent: 6
        }],
      base: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
        }]
    },
    {
      description: 'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      typeAsset: 'cw20',
      address: 'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denomUnits: [{
          denom: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
          exponent: 0
        }, {
          denom: 'howl',
          exponent: 6
        }],
      base: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      typeAsset: 'cw20',
      address: 'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denomUnits: [{
          denom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
          exponent: 0
        }, {
          denom: 'fox',
          exponent: 6
        }],
      base: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      typeAsset: 'cw20',
      address: 'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      denomUnits: [{
          denom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
          exponent: 0
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      base: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }]
    },
    {
      description: 'Mini Punks Token',
      typeAsset: 'cw20',
      address: 'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      denomUnits: [{
          denom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
          exponent: 0
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      base: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }]
    },
    {
      description: 'Kleomedes Token',
      extendedDescription: 'Kleomedes is an infrastructure provider that self-hosts nodes that validate IBC networks. We are active in supporting the chains we validate through providing infrastructure support in the form of RPC endpoints and relayers.\n\nAs a DAO, we have a community of delegators who are active in the discussion of governance on all the chains we validate. We are one of the only validators in the Cosmos Ecosystem that places 100% of profits under the control of DAO governance.\n\nWe support innovation in the Cosmos Ecosystem by funding and supporting projects that we believe, support the growth and decentralization of the networks we validate.',
      typeAsset: 'cw20',
      address: 'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      denomUnits: [{
          denom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
          exponent: 0
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      base: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }]
    },
    {
      description: 'Sikoba Governance Token',
      typeAsset: 'cw20',
      address: 'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      denomUnits: [{
          denom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
          exponent: 0
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      base: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }]
    },
    {
      description: 'Shiba Cosmos',
      typeAsset: 'cw20',
      address: 'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      denomUnits: [{
          denom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
          exponent: 0
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      base: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }]
    },
    {
      description: 'Celestims',
      typeAsset: 'cw20',
      address: 'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      denomUnits: [{
          denom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
          exponent: 0
        }, {
          denom: 'clst',
          exponent: 6
        }],
      base: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      typeAsset: 'cw20',
      address: 'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      denomUnits: [{
          denom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
          exponent: 0
        }, {
          denom: 'watr',
          exponent: 6
        }],
      base: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      typeAsset: 'cw20',
      address: 'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      denomUnits: [{
          denom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
          exponent: 0
        }, {
          denom: 'casa',
          exponent: 6
        }],
      base: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      typeAsset: 'cw20',
      address: 'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      denomUnits: [{
          denom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
          exponent: 0
        }, {
          denom: 'summit',
          exponent: 6
        }],
      base: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      typeAsset: 'cw20',
      address: 'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      denomUnits: [{
          denom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
          exponent: 0
        }, {
          denom: 'manna',
          exponent: 6
        }],
      base: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }]
    },
    {
      description: 'Social Impact DAO focused on youth empowerment',
      typeAsset: 'cw20',
      address: 'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      denomUnits: [{
          denom: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
          exponent: 0
        }, {
          denom: 'empwr',
          exponent: 6
        }],
      base: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
      name: 'EMPWR',
      display: 'empwr',
      symbol: 'EMPWR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
        }]
    },
    {
      description: 'Join us in fighting against world hunger',
      typeAsset: 'cw20',
      address: 'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      denomUnits: [{
          denom: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
          exponent: 0
        }, {
          denom: 'middle',
          exponent: 6
        }],
      base: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
      name: 'Middle',
      display: 'middle',
      symbol: 'MIDDLE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
        }]
    },
    {
      description: 'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
      typeAsset: 'cw20',
      address: 'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      denomUnits: [{
          denom: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
          exponent: 0
        }, {
          denom: 'sunset',
          exponent: 6
        }],
      base: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
      name: 'Sunset',
      display: 'sunset',
      symbol: 'SUNSET',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
        }]
    },
    {
      description: 'Social Impact DAO dedicated to helping restore and protect our environment',
      typeAsset: 'cw20',
      address: 'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      denomUnits: [{
          denom: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
          exponent: 0
        }, {
          denom: 'tree',
          exponent: 6
        }],
      base: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
      name: 'Living Tree',
      display: 'tree',
      symbol: 'TREE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      typeAsset: 'cw20',
      address: 'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      denomUnits: [{
          denom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
          exponent: 0
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      base: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }]
    },
    {
      description: 'Apemos',
      typeAsset: 'cw20',
      address: 'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      denomUnits: [{
          denom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
          exponent: 0
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      base: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      typeAsset: 'cw20',
      address: 'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      denomUnits: [{
          denom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
          exponent: 0
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      base: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }]
    },
    {
      description: 'Doge Apr',
      typeAsset: 'cw20',
      address: 'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      denomUnits: [{
          denom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
          exponent: 0
        }, {
          denom: 'doga',
          exponent: 6
        }],
      base: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }]
    },
    {
      description: 'Osmo Pepe',
      typeAsset: 'cw20',
      address: 'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      denomUnits: [{
          denom: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
          exponent: 0
        }, {
          denom: 'pepe',
          exponent: 6
        }],
      base: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      name: 'Osmo Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
        }]
    },
    {
      description: 'Catmos',
      typeAsset: 'cw20',
      address: 'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      denomUnits: [{
          denom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
          exponent: 0
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      base: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }]
    },
    {
      description: 'Spacer',
      typeAsset: 'cw20',
      address: 'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      denomUnits: [{
          denom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
          exponent: 0
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      base: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      typeAsset: 'cw20',
      address: 'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      denomUnits: [{
          denom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
          exponent: 0
        }, {
          denom: 'light',
          exponent: 9
        }],
      base: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      typeAsset: 'cw20',
      address: 'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      denomUnits: [{
          denom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
          exponent: 0
        }, {
          denom: 'mile',
          exponent: 6
        }],
      base: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }]
    },
    {
      description: 'Void',
      typeAsset: 'cw20',
      address: 'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      denomUnits: [{
          denom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
          exponent: 0
        }, {
          denom: 'void',
          exponent: 6
        }],
      base: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }]
    },
    {
      description: 'Silica',
      typeAsset: 'cw20',
      address: 'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      denomUnits: [{
          denom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
          exponent: 0
        }, {
          denom: 'silica',
          exponent: 6
        }],
      base: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }]
    },
    {
      description: 'Pepec',
      typeAsset: 'cw20',
      address: 'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      denomUnits: [{
          denom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
          exponent: 0
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      base: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }]
    },
    {
      description: 'Palantin',
      typeAsset: 'cw20',
      address: 'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      denomUnits: [{
          denom: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
          exponent: 0
        }, {
          denom: 'pltn',
          exponent: 6
        }],
      base: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
      name: 'Palantin',
      display: 'pltn',
      symbol: 'PLTN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
        }]
    },
    {
      description: 'Propose. Vote. Build.',
      typeAsset: 'cw20',
      address: 'juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      denomUnits: [{
          denom: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
          exponent: 0
        }, {
          denom: 'yfd',
          exponent: 6
        }],
      base: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
      name: 'Y-Foundry DAO',
      display: 'yfd',
      symbol: 'YFD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
          exponent: 0
        }, {
          denom: 'nexx',
          exponent: 6
        }],
      address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
      base: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
          exponent: 0
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
      base: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }]
    },
    {
      description: 'ERIS liquid staked JUNO',
      typeAsset: 'cw20',
      address: 'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      denomUnits: [{
          denom: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
          exponent: 0
        }, {
          denom: 'ampJUNO',
          exponent: 6
        }],
      base: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      name: 'ERIS Amplified JUNO',
      display: 'ampJUNO',
      symbol: 'ampJUNO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
        }]
    },
    {
      description: 'BITS - Native token of Bitswift Cash',
      typeAsset: 'cw20',
      address: 'juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      denomUnits: [{
          denom: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
          exponent: 0
        }, {
          denom: 'bits',
          exponent: 8
        }],
      base: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
      name: 'BITS',
      display: 'bits',
      symbol: 'BITS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
        }]
    },
    {
      description: 'The least memeable memecoin in existence. The cats have had their day, it\'s time for $POIL coin to take reign.',
      typeAsset: 'cw20',
      address: 'juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      denomUnits: [{
          denom: 'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
          exponent: 0
        }, {
          denom: 'poil',
          exponent: 6
        }],
      base: 'cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw',
      name: 'POIL',
      display: 'poil',
      symbol: 'POIL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png'
        }]
    },
    {
      description: 'Minerva was one of the main goddesses worshiped by the Roman Pagans and is a goddess from Roman Mythology.',
      typeAsset: 'cw20',
      address: 'juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      denomUnits: [{
          denom: 'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
          exponent: 0
        }, {
          denom: 'minerva',
          exponent: 6
        }],
      base: 'cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82',
      name: 'MINERVA',
      display: 'minerva',
      symbol: 'MRVA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/minerva.png'
        }]
    },
    {
      description: 'In Roman mythology, Juno (Latin: Iuno; pronounced [[Help:Pronunciation|[ˈjuːnoː]]]) was the protector and advisor of the state.',
      typeAsset: 'cw20',
      address: 'juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      denomUnits: [{
          denom: 'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
          exponent: 0
        }, {
          denom: 'luno',
          exponent: 6
        }],
      base: 'cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk',
      name: 'LUNO',
      display: 'luno',
      symbol: 'LUNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/luno.png'
        }]
    },
    {
      description: 'ATEN is NETA.',
      typeAsset: 'cw20',
      address: 'juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      denomUnits: [{
          denom: 'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
          exponent: 0
        }, {
          denom: 'aten',
          exponent: 6
        }],
      base: 'cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r',
      name: 'ATEN',
      display: 'aten',
      symbol: 'ATEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/aten.png'
        }]
    },
    {
      description: 'HERA is the goddess of marriage in Greek mythology.',
      typeAsset: 'cw20',
      address: 'juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      denomUnits: [{
          denom: 'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
          exponent: 0
        }, {
          denom: 'hera',
          exponent: 6
        }],
      base: 'cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0',
      name: 'HERA',
      display: 'hera',
      symbol: 'HERA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hera.png'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked JUNO',
      typeAsset: 'cw20',
      address: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      denomUnits: [{
          denom: 'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
          exponent: 0
        }, {
          denom: 'bJUNO',
          exponent: 6
        }],
      base: 'cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      name: 'BackBone Labs Liquid Staked JUNO',
      display: 'bJUNO',
      symbol: 'bJUNO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bJUNO-bbl.png'
        }],
      coingeckoId: 'backbone-labs-staked-juno'
    },
    {
      typeAsset: 'ics20',
      description: 'USD Coin on Juno',
      denomUnits: [{
          denom: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
          exponent: 0,
          aliases: ['uusdc', 'microusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channelId: 'channel-3',
            baseDenom: 'uusdc',
            chainName: 'noble'
          },
          chain: {
            channelId: 'channel-224',
            path: 'transfer/channel-224/uusdc'
          }
        }]
    }
  ]
};
export default info;