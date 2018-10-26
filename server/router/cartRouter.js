var cart = require('../js/cart.js')

module.exports = {
  Cart: function (app) {
    var bodyParser = require('body-parser')
    // app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    // 获取购物车列表
    app.get('/cart', function (req, res) {
      var obj = {
        id: JSON.parse(req.query.accountid)
      }
      cart.select(obj, function (result) {
        res.end(result)
      })
    })
  }
}
