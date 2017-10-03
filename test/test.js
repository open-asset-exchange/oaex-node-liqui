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

  it('getInfo', async () => {
    let privateInfo = await liqui.getInfo('eth_btc')
    privateInfo.should.not.null
  })

  it('trade', async () => {
    let trade = await liqui.trade('eth_btc')
    trade.should.not.null
  })

  it('activeOrders', async () => {
    let orders = await liqui.activeOrders('eth_btc')
    orders.should.not.null
  })

  it('orderInfo', async () => {
    let order = await liqui.orderInfo(1234)
    order.should.not.null
  })

  it('cancelOrder', async () => {
    let canceledOrder = await liqui.cancelOrder(1234)
    canceledOrder.should.not.null
  })

  it('tradeHistory', async () => {
    let history = await liqui.tradeHistory()
    history.should.not.null
  })
})