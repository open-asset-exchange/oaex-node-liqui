require('chai').should()

const Liqui = require('../')

let liqui = new Liqui()

describe('Liqui', () => {
  it('info', async () => {
    let info = await liqui.info()
    info.should.not.null
  })

  it('ticker', async () => {
    let ticker = await liqui.ticker('eth_btc')
    ticker.should.not.null
  })

  it('depth', async () => {
    let depth = await liqui.depth('eth_btc')
    depth.should.not.null
  })

  it('trades', async () => {
    let trades = await liqui.trades('eth_btc')
    trades.should.not.null
  })
})