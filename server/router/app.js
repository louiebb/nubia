var express = require('express')
var app = express()

var businessRouter = require('./businessRouter.js')
var accountRouter = require('./accountRouter.js')
var cartRouter = require('./cartRouter.js')
var comrouter = require('./commonRouter.js')
var routers = Object.assign({}, businessRouter, comrouter, accountRouter, cartRouter)
module.exports = {
  start: function (port) {
    app.all('*', function (req, res, next) {
      // console.log('--------------',req.headers.origin)
      // res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,Origin,No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, X-E4M-With, userId, token')
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      res.header('X-Powered-By', '3.2.1')
      res.header('Access-Control-Allow-Credentials', 'true')
      res.setHeader('Content-Type', 'application/json;charset=UTF-8')

      if (req.method === 'OPTIONS') {
        res.sendStatus(200)// 让options请求快速返回
      } else {
        next()
      }
    })
    app.listen(port, '0.0.0.0')
    // 商品
    routers.Shop(app)
    // 用户
    routers.Account(app)
    // 购物车
    routers.Cart(app)
    // 公共
    routers.Comm(app)
  }
}
