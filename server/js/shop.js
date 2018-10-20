let db = require('../sql/mysqlDB.js')
let apiResult = require('../modules/ApiResult.js')

// 路由映射表
// 路由映射规则

// 数据库表
let shopListTable = 'shoplist'
let category = 'category'
let blockProducts = 'block_products'
let business = {
  pageselect: function (data, callback) {
    let condition = 'and' + data.where.map(x => ` ${x.f} ${x.o} '${x.v}' `).join('and')
    let sql = `select * from ${shopListTable} where 1=1 ${condition} limit ${(data.pageNo - 1) * data.qty} , ${data.qty}`
    let sql2 = `select count(*) as total  from ${shopListTable} where 1=1 ${condition}`
    db.pageselect(sql, sql2, function (res) {
      callback(res)
    })
  },
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
  },

  selectallclassfiy: function (data, callback) {
    let where = data.where
    let condition = `${where.f} ${where.o} '${where.v}' `
    let sql = ''

    if (where.t === '3') {
      sql = `select id,name,type  from ${blockProducts} where  ${condition}`
    } else if (where.t === '2') {
      sql = `select id,name,type  from ${category} where  ${condition}`
    }
    db.common(sql, function (res) {
      callback(res)
    })
  },
  selectclassfiy: function (data, callback) {
    let condition = 'and' + data.where.map(x => ` ${x.f} ${x.o} '${x.v}' `).join('and')
    let sql = `select * from ${blockProducts} where 1=1 ${condition} limit ${(data.pageNo - 1) * data.qty} , ${data.qty}`
    let sql2 = `select count(*) as total  from ${blockProducts} where 1=1 ${condition}`
    db.pageselect(sql, sql2, function (res) {
      callback(res)
    })
  },
  classfiyupdatebyid: function (data, callback) {
    let valarr = []
    let currdata = data.values
    for (let key in currdata) {
      valarr.push({
        f: key,
        v: currdata[key]
      })
    }
    let condition = valarr.map(x => ` ${x.f} = '${x.v}' `).join(',')
    let sql = `update ${blockProducts} set ${condition} where ${data.where.f} ${data.where.o} '${data.where.v}'`
    db.common(sql, function (res) {
      callback(res)
    })
  },
  classfiydeletebyid: function (data, callback) {
    let where = data.where
    let condition = `${where.f} ${where.o} '${where.v}' `
    let sql = `delete from ${blockProducts} where ${condition}`
    db.common(sql, function (res) {
      callback(res)
    })
  },
  classfiyadd: function (data, callback) {
    let values = data.values
    let farr = []
    let varr = []
    for (let key in values) {
      farr.push(key)
      varr.push(`'${values[key]}'`)
    }
    farr = farr.join(',')
    varr = varr.join(',')
    let sql = `INSERT INTO ${blockProducts} (${farr}) VALUE (${varr})`
    db.common(sql, function (res) {
      callback(res)
    })
  },
  shopadd: function (data, callback) {
    let values = data.values
    let farr = []
    let varr = []
    for (let key in values) {
      farr.push(key)
      varr.push(`'${values[key]}'`)
    }
    farr = farr.join(',')
    varr = varr.join(',')
    let sql = `INSERT INTO ${shopListTable} (${farr}) VALUE (${varr})`
    console.log(111111, sql)

    db.common(sql, function (res) {
      callback(res)
    })
  }
}
module.exports = business
