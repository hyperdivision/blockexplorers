module.exports = {
  name: 'Blockstream',
  url: 'https://blockstream.info/testnet/',
  transaction (tx) {
    return `https://blockstream.info/testnet/tx/${tx}`
  },
  address (address) {
    return `https://blockstream.info/testnet/address/${address}`
  },
  block (block) {
    return `https://blockstream.info/testnet/block/${block}`
  },
  blockHeight (blockHeight) {
    return `https://blockstream.info/testnet/block-height/${blockHeight}`
  }
}
