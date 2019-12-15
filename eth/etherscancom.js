module.exports = {
  name: 'Etherscan',
  url: 'https://etherscan.io/',
  transaction (tx) {
    return `https://etherscan.io/tx/${tx}`
  },
  address (address) {
    return `https://etherscan.io/address/${address}`
  },
  block (block) {
    return `https://etherscan.io/block/${block}`
  },
  blockHeight (blockHeight) {
    return `https://etherscan.io/block/${blockHeight}`
  }
}
