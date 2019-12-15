module.exports = {
  name: 'Blockcypher',
  url: 'https://live.blockcypher.com/btc/',
  transaction (tx) {
    return `https://live.blockcypher.com/btc/tx/${tx}/`
  },
  address (address) {
    return `https://live.blockcypher.com/btc/address/${address}/`
  },
  block (block) {
    return `https://live.blockcypher.com/btc/block/${block}/`
  },
  blockHeight (blockHeight) {
    return `https://live.blockcypher.com/btc/block/${blockHeight}/`
  }
}
