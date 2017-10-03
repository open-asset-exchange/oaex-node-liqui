require('chai').should()

const Liqui = require('../')

let liqui = new Liqui()

describe('Liqui', () => {
  it('info', async () => {
    let info = await liqui.info()
    info.should.not.null
  })
})