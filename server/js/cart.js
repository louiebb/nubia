let db = require('../sql/mysqlDB.js')
let apiResult = require('../modules/ApiResult.js')

// 路由映射表
// 路由映射规则

// 数据库表
let shopListTable = 'shoplist'
let blockProducts = 'block_products'
let shopBusiness = {
  select: function (obj, callback) {
    let sqlshop = `select * from ${shopListTable}`
    let sqlblock = `select * from ${blockProducts}`
    if (obj.pageType === '5') {
      sqlshop = `select * from ${shopListTable} where page_type = ${obj.pageType}`
      db.map(sqlshop, sqlblock, function (res) {
        res.shoplist.forEach(x => {
          x.block_products = res.block.filter(j => j.shopid === x.id)[0]
        })
        let arr = {}
        res.shoplist.forEach(x => {
          if (!arr[x.cate_id]) {
            arr[x.cate_id] = [x]
          } else {
            arr[x.cate_id].push(x)
          }
        })
        callback(apiResult(true, arr, null))
      })
    } else {
      db.common(sqlshop, function (res) {
        callback(res)
      })
    }
  }
}
module.exports = shopBusiness
