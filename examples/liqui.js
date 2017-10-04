const Liqui = require('../')

let liqui = new Liqui({
  key: 'YOUR_KEY',
  secret: 'YOUR_SECRET'
})

;(async() => {
  let info = await liqui.info()
  console.log(info)

  let ticker = await liqui.ticker('eth_btc')
  console.log(ticker)

  let depth = await liqui.depth('eth_btc')
  console.log(depth)

  let trades = await liqui.trades('eth_btc')
  console.log(trades)

  let accountInfo = await liqui.getInfo()
  console.log(accountInfo)

  let trade = await liqui.trade('btc_eth', 'buy', 0.01, 0.01)
  console.log(trade)

  let orders = await liqui.activeOrders('eth_btc')
  console.log(orders)

  let orderIds = Object.keys(orders)
  if (orderIds.length > 0) {
    let order = await liqui.orderInfo(orders[0].order_id)
    console.log(order)

    let canceledOrder = await await liqui.cancelOrder(orderIds[0])
    console.log(canceledOrder)
  }
  
  let tradeHistory = await tradeHistory()
  console.log(tradeHistory)
})()
