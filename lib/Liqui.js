const querystring = require('querystring')
const request = require('request-promise-native')
const crypto = require('crypto')

class Liqui {
  constructor(options) {
    options = options || {}

    this._key = options.key
    this._secret = options.secret
  }

  async info() {
    return await this._get('/info')
  }

  async ticker(pairs) {
    return await this._get(`/ticker/${pairs}`)
  }

  async depth(pairs) {
    return await this._get(`/depth/${pairs}`)
  }

  async trades(pairs) {
    return await this._get(`/trades/${pairs}`)
  }

  async getInfo() {
    return await this._post({method: 'getInfo'})
  }

  async trade(pair, type, rate, amount) {
    return await this._post({method: 'Trade', pair, type, rate, amount})
  }

  async activeOrders(pairs) {
    return await this._post({method: 'ActiveOrders', pairs})
  }

  async orderInfo(order_id) {
    return await this._post({method: 'OrderInfo', order_id})
  }

  async cancelOrder(order_id) {
    return await this._post({method: 'CancelOrder', order_id})
  }

  async tradeHistory(options) {
    return await this._post({method: 'TradeHistory', ...options})
  }

  async _get(path, params) {
    let data = await request({
      method: 'GET',
      url: `https://api.liqui.io/api/3${path}`,
      qs: params,
      json: true,
      forever: true,
      timeout: 10000
    })
    
    return data
  }

  async _post(params) {
    params.nonce = Math.floor(new Date().getTime() / 1000)
    let qs = querystring.stringify(params)
    let sign = undefined
    if (this._key) {
      sign = crypto
        .createHmac('sha512', this._secret)
        .update(qs, 'utf8')
        .digest('hex')
    }
    let data = await request({
      method: 'POST',
      url: `https://api.liqui.io/tapi`,
      headers: {
        Key: this._key,
        Sign: sign
      },
      form: params,
      json: true,
      forever: true,
      timeout: 10000
    })
    
    if (!data.success)
      throw new Error(data.error)

    return data.return
  }
}

module.exports = Liqui
