var account = require('../js/account.js')

module.exports = {
  Account: function (app) {
    var bodyParser = require('body-parser')
    // app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    // 获取账号列表
    app.get('/accountList', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where),
        pageNo: req.query.pageNo,
        qty: req.query.qty
      }
      account.pageselect(obj, function (result) {
        res.end(result)
      })
    })
    // 查询是否存在账号
    app.get('/checkedAccount', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where)
      }
      account.selectByCondition(obj, function (result) {
        res.end(result)
      })
    })
    app.get('/login', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where)
      }
      account.login(obj, function (result) {
        res.end(result)
      })
    })
  }
}
