module.exports = {
  name: 'Ethplorer',
  url: 'https://ethplorer.io/',
  transaction (tx) {
    return `https://ethplorer.io/tx/${tx}`
  },
  address (address) {
    return `https://ethplorer.io/address/${address}`
  },
  block (block) {
    throw new Error('Not implemented by ethplorer.io')
  },
  blockHeight (blockHeight) {
    throw new Error('Not implemented by ethplorer.io')
  }
}
