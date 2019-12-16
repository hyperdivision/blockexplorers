module.exports = {
  name: 'EOSX',
  url: 'https://www.eosx.io/',
  transaction (tx) {
    return `https://www.eosx.io/tx/${tx}`
  },
  address (address) {
    throw new Error('Not implemented yet')
  },
  block (block) {
    return `https://www.eosx.io/block/${block}`
  },
  blockHeight (blockHeight) {
    throw new Error('Not implemented yet')
  }
}