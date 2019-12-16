module.exports = {
  name: 'Dash',
  url: 'https://explorer.dash.org/',
  transaction (tx) {
    throw new Error('Not implemented yet')
  },
  address (address) {
    throw new Error('Not implemented yet')
  },
  block (block) {
    return `https://explorer.dash.org/insight/block/${block}`
  },
  blockHeight (blockHeight) {
    throw new Error('Not implemented yet')
  }
}