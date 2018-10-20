var shop = require('../js/shop.js')

module.exports = {
  Shop: function (app) {
    var bodyParser = require('body-parser')
    app.use(bodyParser.json())
    // 注册路由
    app.post('/shoplist', function (req, res) {
      var obj = {
        where: req.body.where
      }
      shop.select(obj, function (result) {
        res.end(result)
      })
    })

    app.get('/block', function (req, res) {
      var obj = {
        pageType: req.query.pageType
      }
      shop.select(obj, function (result) {
        res.end(result)
      })
    })

    app.post('/shopClassify', function (req, res) {
      var obj = {
        where: req.body.where,
        pageNo: req.body.pageNo,
        qty: req.body.qty
      }
      shop.selectclassfiy(obj, function (result) {
        res.end(result)
      })
    })

    app.post('/classfiyUpdateById', function (req, res) {
      var obj = {
        values: req.body.values,
        where: req.body.where
      }
      shop.classfiyupdatebyid(obj, function (result) {
        res.end(result)
      })
    })

    app.post('/classfiyDeleteById', function (req, res) {
      var obj = {
        where: req.body.where
      }
      shop.classfiydeletebyid(obj, function (result) {
        res.end(result)
      })
    })

    app.post('/classfiyAdd', function (req, res) {
      var obj = {
        values: req.body.values
      }
      shop.classfiyadd(obj, function (result) {
        res.end(result)
      })
    })
  }
}
