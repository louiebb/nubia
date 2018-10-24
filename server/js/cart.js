let db = require('../sql/mysqlDB.js')
let apiResult = require('../modules/ApiResult.js')

// 路由映射表
// 路由映射规则

// 数据库表
let cartTable = 'cart'
let specInfosTable = 'spec_infos'
let increaseProductsTable = 'increase_products'
let cartBusiness = {
  select: function (obj, callback) {
    let sqlcart = `select * from ${cartTable} where cart_id = ${548581}`
    let specInfos = `select * from ${specInfosTable}`
    let increaseProducts = `select * from ${increaseProductsTable}`
    db.map(sqlcart, increaseProducts, function (res) {
      // cart后台接口
      let data = {}
      if (res.dataOne.length) {
        res.dataOne.map(x => x.minus = !!x.minus)
      }
      data.cart_products = res.dataOne
      data.increase_products = res.dataTwo

      // console.log(res)
      callback(apiResult(true, data, null))
    })
  }
}
module.exports = cartBusiness
