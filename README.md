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
<!-- ABYSS -->
    <tr>
      <td rowspan=2>Abyss Token</td>
      <td rowspan=2><code>ABYSS</code></td>
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
<!-- ADD -->
    <tr>
      <td rowspan=1>ADNODE</td>
      <td rowspan=1><code>ADD</code></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- AGI -->
    <tr>
      <td rowspan=2>SingularityNET</td>
      <td rowspan=2><code>AGI</code></td>
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
<!-- AID -->
    <tr>
      <td rowspan=2>AidCoin</td>
      <td rowspan=2><code>AID</code></td>
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
<!-- AION -->
    <tr>
      <td rowspan=1>Aion</td>
      <td rowspan=1><code>AION</code></td>
      <td>Dashboard 2.4</td>
      <td><a href="https://mainnet.theoan.com/#/dashboard">https://mainnet.theoan.com/#/dashboard</a></td>
      <td>Yes</td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
<!-- ANT -->
    <tr>
      <td rowspan=2>Aragon</td>
      <td rowspan=2><code>ANT</code></td>
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
<!-- ATMI -->
    <tr>
      <td rowspan=2>Atonomi</td>
      <td rowspan=2><code>ATMI</code></td>
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
<!-- AUC -->
    <tr>
      <td rowspan=2>Auctus</td>
      <td rowspan=2><code>AUC</code></td>
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
<!-- AVT -->
    <tr>
      <td rowspan=2>Aventus</td>
      <td rowspan=2><code>AVT</code></td>
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
<!-- BAB -->
    <tr>
      <td rowspan=2>Basecoin</td>
      <td rowspan=2><code>BAB</code></td>
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
<!-- BAT -->
    <tr>
      <td rowspan=2>Basic Attention Token</td>
      <td rowspan=2><code>BAT</code></td>
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
<!-- BBN -->
    <tr>
      <td rowspan=2>Banyan Network</td>
      <td rowspan=2><code>BBN</code></td>
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
<!-- BCH -->
    <tr>
      <td rowspan=3>Bitcoin Cash</td>
      <td rowspan=3><code>BCH</code></td>
      <td>Etherscan</td>
      <td><a href="https://blockchair.com/bitcoin-cash">https://blockchair.com/bitcoin-cash</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Bitcoin Cash Explorer</td>
      <td><a href="https://bch.tokenview.com/en">https://bch.tokenview.com/en</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ViaExplorer</td>
      <td><a href="https://explorer.viabtc.com/bch">https://explorer.viabtc.com/bch</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- BCI -->
    <tr>
      <td rowspan=1>Bitcoin Interest</td>
      <td rowspan=1><code>BCI</code></td>
      <td>Etherscan</td>
      <td><a href="https://explorer.bitcoininterest.io/">https://explorer.bitcoininterest.io/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- BFT -->
    <tr>
      <td rowspan=2>BnkToTheFuture</td>
      <td rowspan=2><code>BFT</code></td>
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
<!-- BNT -->
    <tr>
      <td rowspan=3>Bancor</td>
      <td rowspan=3><code>BNT</code></td>
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
    <tr>
      <td>EOSX</td>
      <td><a href="https://www.eosx.io/">https://www.eosx.io/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- BOX -->
    <tr>
      <td rowspan=1>ContentBox</td>
      <td rowspan=1><code>BOX</code></td>
      <td>Etherscan</td>
      <td><a href="https://etherscan.io/">https://etherscan.io/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
<!-- BSV -->
    <tr>
      <td rowspan=3>Bitcoin SV</td>
      <td rowspan=3><code>BSV</code></td>
      <td>Blockchair</td>
      <td><a href="https://blockchair.com/bitcoin-sv/">https://blockchair.com/bitcoin-sv/</a></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Bitcoin SV Explorer</td>
      <td><a href="https://bchsv.tokenview.com/en/">https://bchsv.tokenview.com/en/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ViaExplorer</td>
      <td><a href="https://explorer.viabtc.com/bsv/">https://explorer.viabtc.com/bsv/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- BTG -->
    <tr>
      <td rowspan=3>Bitcoin Gold</td>
      <td rowspan=3><code>BTG</code></td>
      <td>Bitcoin Gold Explorer</td>
      <td><a href="https://explorer.bitcoingold.org/insight/">https://explorer.bitcoingold.org/insight/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Bitcoin Gold Explorer</td>
      <td><a href="https://btg.tokenview.com/">https://btg.tokenview.com/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BTG Explorer</td>
      <td><a href="https://btgexplorer.com/">https://btgexplorer.com/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- BTT -->
    <tr>
      <td rowspan=2>BitTorrent</td>
      <td rowspan=2><code>BTT</code></td>
      <td>TRON</td>
      <td><a href="https://tronscan.org/">https://tronscan.org/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>TRXPLORER</td>
      <td><a href="https://trxplorer.io/">https://trxplorer.io/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- CBT -->
    <tr>
      <td rowspan=2>CommerceBlock</td>
      <td rowspan=2><code>CBT</code></td>
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
<!-- CLO -->
    <tr>
      <td rowspan=2>Callisto Network</td>
      <td rowspan=2><code>CLO</code></td>
      <td></td>
      <td><a href=></a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Ethplorer</td>
      <td><a href=></a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
<!-- DSH -->
    <tr>
      <td rowspan=1>Dash</td>
      <td rowspan=1><code>DSH</code></td>
      <td>dash.org</td>
      <td><a href="https://explorer.dash.org/">https://explorer.dash.org/</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Install

```sh
npm install @hyperdivision/blockexplorers
```

## License

[ISC](LICENSE)
