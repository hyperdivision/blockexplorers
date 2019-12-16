# `@hyperdivision/blockexplorers`

> An interface for generating address, transaction and block URLs for various block explorers

## Usage

```js
var blockexplorers = require('@hyperdivision/blockexplorers')

const genesisBlockUrl = blockexplorers.btc.blockstreaminfo.blockHeight(0)
const satoshiNakamotoAddressUrl = blockexplorers.btc.blockstreaminfo.address('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')s
```

## API

The API for each token and explorer can either be `require`d directly or
accessed by "dotting into":

```js
const blockexplorers = require('@hyperdivision/blockexplorers')
const btc = require('@hyperdivision/blockexplorers/btc')
const blockstreaminfo = require('@hyperdivision/blockexplorers/btc/blockstreaminfo')

// these are all equivalent
blockexplorers.btc.blockstreaminfo.blockHeight(0)
btc.blockstreaminfo.blockHeight(0)
blockstreaminfo.blockHeight(0)
```

All methods simply do string interpolation with the argument provided.
Four methods are exposed, however not all explorers support all methods:

### `.transaction(tx)`

`tx` is the transaction hash (or equivalent)

### `.address(address)`

`address` is the address / account (or equivalent)

### `.block(block)`

`block` is the block hash (or equivalent)

### `.blockHeight(blockHeight)`

`blockHeight` is the block count since the genesis block

## Blockchains

<table>
  <thead>
    <th>Name</th>
    <th>Symbol</th>
    <th>Explorer</th>
    <th>URL</th>
    <th><code>.transaction()</code></th>
    <th><code>.address()</code></th>
    <th><code>.block()</code></th>
    <th><code>.blockHeight()</code></th>
  </thead>
  <tbody>
<!-- BTC -->
    <tr>
      <td rowspan=4>Bitcoin</td>
      <td rowspan=4><code>BTC</code></td>
      <td>Blockstream</td>
      <td><a href="https://blockstream.info/">https://blockstream.info/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Blockcypher</td>
      <td><a href="https://live.blockcypher.com/btc/">https://live.blockcypher.com/btc/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Bitcoin.com</td>
      <td><a href="https://explorer.bitcoin.com/btc">https://explorer.bitcoin.com/btc</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>BTC.com</td>
      <td><a href="https://btc.com/">https://btc.com/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
<!-- tBTC -->    
    <tr>
      <td rowspan=2>Bitcoin Testnet</td>
      <td rowspan=2><code>tBTC</code></td>
      <td>Blockstream</td>
      <td><a href="https://blockstream.info/testnet/">https://blockstream.info/testnet/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Blockcypher</td>
      <td><a href="https://live.blockcypher.com/btc-testnet/">https://live.blockcypher.com/btc-testnet/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
<!-- ETH -->
    <tr>
      <td rowspan=2>Ethereum</td>
      <td rowspan=2><code>ETH</code></td>
      <td>Etherscan</td>
      <td><a href="https://etherscan.io/">https://etherscan.io/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Ethplorer</td>
      <td><a href="https://ethplorer.io/">https://ethplorer.io/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
<!-- DSH -->
    <tr>
      <td rowspan=2>Dash</td>
      <td rowspan=2><code>DSH</code></td>
      <td>Etherscan</td>
      <td><a href="https://etherscan.io/">https://etherscan.io/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Ethplorer</td>
      <td><a href="https://ethplorer.io/">https://ethplorer.io/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Install

```sh
npm install @hyperdivision/blockexplorers
```

## License

[ISC](LICENSE)
