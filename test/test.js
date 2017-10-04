require('chai').should()

const Liqui = require('../')

let key = process.env.key
let secret = process.env.secret

let liqui = new Liqui({
  key,
  secret
})

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
    let privateInfo = await liqui.getInfo()
    privateInfo.should.not.null
  })

  it('trade', async () => {
    let trade = await liqui.trade('eth_btc', 'buy', 0.01, 0.01)
    trade.should.not.null

    let orders = await liqui.activeOrders('eth_btc')
    orders.should.not.null
    
    let order = await liqui.orderInfo(trade.order_id)
    order.should.not.null
    
    let canceledOrder = await liqui.cancelOrder(trade.order_id)
    canceledOrder.should.not.null
  }).timeout(10000)

  it('tradeHistory', async () => {
    let history = await liqui.tradeHistory()
    history.should.not.null
  })
})