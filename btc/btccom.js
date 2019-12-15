module.exports = {
  name: 'BTC.com',
  url: 'https://btc.com/',
  transaction (tx) {
    return `https://btc.com/${tx}`
  },
  address (address) {
    return `https://btc.com/${address}`
  },
  block (block) {
    return `https://btc.com/${block}`
  },
  blockHeight (blockHeight) {
    return `https://btc.com/block/${blockHeight}`
  }
}
