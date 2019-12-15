module.exports = {
  name: 'BTC.com',
  url: 'https://eth.btc.com/',
  transaction (tx) {
    return `https://eth.btc.com/txinfo/${tx}`
  },
  address (address) {
    return `https://eth.btc.com/accountinfo/${address}`
  },
  block (block) {
    throw new Error('Not implemented by eth.btc.com')
  },
  blockHeight (blockHeight) {
    return `https://etherscan.io/blockinfo/${blockHeight}`
  }
}
