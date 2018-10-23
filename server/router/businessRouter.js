var shop = require('../js/shop.js')

module.exports = {
  Shop: function (app) {
    var bodyParser = require('body-parser')
    app.use(bodyParser.json())
    // 注册路由
    app.get('/block', function (req, res) {
      var obj = {
        pageType: req.query.pageType
      }
      shop.select(obj, function (result) {
        res.end(result)
      })
    })
  }
}
