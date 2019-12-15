module.exports = {
  name: 'Blockstream',
  url: 'https://blockstream.info/',
  transaction (tx) {
    return `https://blockstream.info/tx/${tx}`
  },
  address (address) {
    return `https://blockstream.info/address/${address}`
  },
  block (block) {
    return `https://blockstream.info/block/${block}`
  },
  blockHeight (blockHeight) {
    return `https://blockstream.info/block-height/${blockHeight}`
  }
}
