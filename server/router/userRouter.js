var user = require('../js/user.js')

module.exports = {
  User: function (app) {
    var bodyParser = require('body-parser')
    // app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    app.get('/userlist', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where),
        pageNo: req.query.pageNo,
        qty: req.query.qty
      }
      user.pageselect(obj, function (result) {
        res.end(result)
      })
    })
    app.get('/checkedAccount', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where)
      }
      user.selectByCondition(obj, function (result) {
        res.end(result)
      })
    })
    app.get('/login', function (req, res) {
      var obj = {
        where: JSON.parse(req.query.where)
      }
      user.login(obj, function (result) {
        res.end(result)
      })
    })
    app.get('/userRole', function (req, res) {
      user.userrole(function (result) {
        res.end(result)
      })
    })

    app.post('/userdeletebyid', function (req, res) {
      var obj = {
        where: req.body.where
      }
      user.deletebyid(obj, function (result) {
        res.end(result)
      })
    })
    app.post('/userupdatebyid', function (req, res) {
      var obj = {
        values: req.body.values,
        where: req.body.where
      }
      user.updatebyid(obj, function (result) {
        res.end(result)
      })
    })
    app.post('/userAdd', function (req, res) {
      var obj = {
        values: req.body.values
      }
      user.add(obj, function (result) {
        res.end(result)
      })
    })
  }
}
