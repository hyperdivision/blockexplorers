module.exports = {
  name: 'Bitcoin.com',
  url: 'https://explorer.bitcoin.com/btc',
  transaction (tx) {
    return `https://explorer.bitcoin.com/btc/tx/${tx}`
  },
  address (address) {
    return `https://explorer.bitcoin.com/btc/address/${address}`
  },
  block (block) {
    return `https://explorer.bitcoin.com/btc/block/${block}`
  },
  blockHeight (blockHeight) {
    return `https://explorer.bitcoin.com/btc/block/${blockHeight}`
  }
}
