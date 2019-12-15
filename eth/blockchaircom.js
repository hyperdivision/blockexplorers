module.exports = {
  name: 'Blockchair',
  url: 'https://blockchair.com/',
  transaction (tx) {
    return `https://blockchair.com/ethereum/transaction/${tx}`
  },
  address (address) {
    return `https://blockchair.com/ethereum/address/${address}`
  },
  block (block) {
    return `https://blockchair.com/ethereum/block/${block}`
  },
  blockHeight (blockHeight) {
    return `https://blockchair.com/ethereum/block/${blockHeight}`
  }
}
