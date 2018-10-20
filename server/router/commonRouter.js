// 路由映射表
// 路由映射规则
let captcha = require('../modules/captcha.js')
let apires = require('../modules/ApiResult.js')

module.exports = {
  Comm: function (app) {
    var session = require('express-session')
    app.use(session({'secret': 'louiebb'}))
    var cookieParser = require('cookie-parser')
    app.use(cookieParser())
    // post获取数据需要用到body-parser  的模块
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded())

    // 获取验证码
    app.post('/getcode', function (req, res) {
      var svg = captcha.getCode(req, res)
      res.end(apires(true, svg, null))
    })
    // 验证码是否一致
    app.post('/chkcode', function (req, res) {
      var code = req.session.captcha || ''
      code = code.toLocaleLowerCase()
      if (req.body.code.toLocaleLowerCase() === code) {
        res.end(apires(true, code, null))
      } else {
        res.end(apires(false, null, '验证码不匹配'))
      }
    })
  }
}
