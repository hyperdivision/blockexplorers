module.exports = {
  name: 'Blockcypher',
  url: 'https://live.blockcypher.com/btc-testnet/',
  transaction (tx) {
    return `https://live.blockcypher.com/btc-testnet/tx/${tx}/`
  },
  address (address) {
    return `https://live.blockcypher.com/btc-testnet/address/${address}/`
  },
  block (block) {
    return `https://live.blockcypher.com/btc-testnet/block/${block}/`
  },
  blockHeight (blockHeight) {
    return `https://live.blockcypher.com/btc-testnet/block/${blockHeight}/`
  }
}
