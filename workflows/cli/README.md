# @chain-registry/cli

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@chain-registry/cli"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=workflows%2Fcli%2Fpackage.json"></a>
</p>

The `@chain-registry/cli` is a powerful command-line interface designed to interact with the Chain Registry, allowing users to fetch information, validate data, and generate TypeScript interfaces directly from JSON schemas.

## Features

🔍 **Info**: Retrieve detailed information about chains, assets, and asset lists.

✅ **Validate**: Check the integrity and validity of the registry data against its schemas.

🛠️ **Codegen**: Generate TypeScript definitions for use in development, ensuring type safety and adherence to the schema definitions.

## Installation

To get started with `@chain-registry/cli`, install it via npm or yarn:

```js
npm install @chain-registry/cli
# or
yarn add @chain-registry/cli
```

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Command Details](#command-details)
  - [Info](#info)
  - [Validate](#validate)
  - [Codegen](#codegen)
- [Related Projects](#related)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## Command Details

### Info

Fetch and display information about entities in the chain registry:

```sh
chain-registry info
```

Options:

- `chain`: Fetch information specific to a chain.
- `asset-list`: Fetch asset lists associated with a specific chain.
- `asset`: Fetch detailed information about a specific asset.
- `--registryDir`: Path to the chain registry directory.

### Validate

Validate the data in the registry against the provided JSON schemas:

```sh
chain-registry validate
```

Options:

- `--registryDir`: Path to the chain registry directory (required).
- `--useStrict`: Enables strict mode in the schema validation process, ensuring that only explicitly permitted properties are present in the data (default: false).
- `--allErrors`: Configures the validator to return all errors found during validation instead of stopping at the first error (default: true).
- `--useDefaults`: Applies default values defined in the schema during validation, filling in missing data as needed (default: true).

### Codegen

Generate TypeScript interfaces for the registry:

```sh
chain-registry codegen --outputDir ./src --registryDir /path/to/registry
```

Options:

- `--outputDir`: Directory to output the generated TypeScript files.
- `--registryDir`: Path to the chain registry directory.
- `--strictTypeSafety`: Enables strict TypeScript type definitions.
- `--camelCase`: Converts JSON schema properties to camelCase in the generated TypeScript files.

## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
