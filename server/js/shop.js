let db = require('../sql/mysqlDB.js')
let apiResult = require('../modules/ApiResult.js')

// 路由映射表
// 路由映射规则

// 数据库表
let shopListTable = 'shoplist'
let category = 'category'
let blockProducts = 'block_products'
let shopBusiness = {
  select: function (obj, callback) {
    let sqlshop = `select * from ${shopListTable}`
    let sqlblock = `select * from ${blockProducts}`
    if (obj.pageType === '5') {
      sqlshop = `select * from ${shopListTable} where page_type = ${obj.pageType}`
      db.map(sqlshop, sqlblock, function (res) {
        res.dataOne.forEach(x => {
          x.block_products = res.dataTwo.filter(j => j.shopid === x.id)[0]
        })
        let arr = {}
        res.dataOne.forEach(x => {
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
  },
  deletebyid: function (data, callback) {
    let where = data.where
    let condition = `${where.f} ${where.o} '${where.v}' `
    let sql = `delete from ${shopListTable} where ${condition}`

    db.common(sql, function (res) {
      callback(res)
    })
  },
  updatebyid: function (data, callback) {
    let valarr = []
    let currdata = data.values
    for (let key in currdata) {
      valarr.push({
        f: key,
        v: currdata[key]
      })
    }
    let condition = valarr.map(x => ` ${x.f} = '${x.v}' `).join(',')
    let sql = `update ${shopListTable} set ${condition} where ${data.where.f} ${data.where.o} '${data.where.v}'`
    db.common(sql, function (res) {
      callback(res)
    })
  }
}
module.exports = shopBusiness
