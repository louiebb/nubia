let db = require('../sql/mysqlDB.js')
let md5 = require('../modules/md5.js')
let async = require('async')
// 日期格式化
// let dateutils = require('date-utils')

// 路由映射表
// 路由映射规则

let accountTable = 'account'
let roleTable = 'role'

let accountBusiness = {
  logindo: function (id, cb) {
    let date = new Date()
    let token = md5(date.getTime().toString())
    date.setUTCDate(date.getUTCDate() + 7)
    let exprietime = date.toFormat('YYYY-MM-DD HH24:MI:SS')
    let sql = `update ${accountTable} set token = '${token}' , expire = '${exprietime}'  where id =  ${id}`
    db.common(sql, function (res) {
      res = JSON.parse(res)
      if (res.status) {
        cb()
      }
    })
    // console.log(111,token,exprietime)
  },
  // 用户是否存在
  accountexist: function (condition, cb) {
    let sql = `select * from ${accountTable} where ${condition}`
    db.common(sql, (res) => {
      res = JSON.parse(res)
      if (res.status) {
        if (res.data.length) {
          this.logindo(res.data[0].id, cb)
        } else {
          cb()
        }
      } else {
        cb()
      }
    })
  },
  // 登录
  login: function (data, callback) {
    let condition = data.where.map(x => ` ${x.f} ${x.o} '${x.v}' `).join('and')
    // 判断是否存在
    this.accountexist(condition, function () {
      let sql = `select * from ${accountTable} where ${condition}`
      db.common(sql, function (res) {
        callback(res)
      })
    })
  },
  // 根据条件查询用户
  selectByCondition: function (data, callback) {
    let condition = 'and' + data.where.map(x => ` ${x.f} ${x.o} '${x.v}' `).join('and')
    let sql = `select * from ${accountTable} where 1=1 ${condition}`
    //  console.log(sql);
    db.common(sql, function (res) {
      callback(res)
    })
  },
  pageselect: function (data, callback) {
    let condition = 'and' + data.where.map(x => ` ${x.f} ${x.o} '${x.v}' `).join('and')
    let sql = `select * from ${accountTable} where 1=1 ${condition} limit ${(data.pageNo - 1) * data.qty} , ${data.qty}`
    //  console.log(sql);

    let sql2 = `select count(*) as total  from ${accountTable} where 1=1 ${condition}`
    db.pageselect(sql, sql2, function (res) {
      callback(res)
    })
  },
  // 根据id删除用户
  deletebyid: function (data, callback) {
    let where = data.where
    let condition = `${where.f} ${where.o} '${where.v}' `
    let sql = `delete from ${accountTable} where ${condition}`
    db.common(sql, function (res) {
      callback(res)
    })
  },
  // 多选删除（传入id数组）
  deleteSelect: (data, callback) => {
    let idarr = JSON.parse(data.where)
    let doarr = []
    // 如何保证每一个都删除了
    idarr.forEach(x => {
      doarr.push(function (callback) {
        callback(null, this.deleteid(x, function (params) {
          return params
        }))
      })
    })
    async.parallel(doarr, function (err, results) {
      console.log('err:', err)
      console.log('results', results)
    })
  },
  // 特殊删除用于多选
  deleteid (id, cb) {
    let sql = `delete from ${accountTable} where id = ${id}`
    db.common(sql, function (res) {
      cb(res)
    })
  },
  // 根据id更新
  updatebyid: function (data, callback) {
    let valarr = []
    let currdata = data.values
    currdata.state = currdata.state ? 1 : 0
    currdata.jointime = (new Date(currdata.jointime)).toFormat('YYYY-MM-DD HH24:MI:SS')

    delete currdata.regtime
    delete currdata.expire
    for (let key in currdata) {
      valarr.push({
        f: key,
        v: currdata[key]
      })
    }
    let condition = valarr.map(x => ` ${x.f} = '${x.v}' `).join(',')
    let sql = `update ${accountTable} set ${condition} where ${data.where.f} ${data.where.o} '${data.where.v}'`
    console.log(1111, sql)

    db.common(sql, function (res) {
      callback(res)
    })
  },
  // 注册
  register: function (data, callback) {
    let values = data.values
    let farr = []
    let varr = []
    for (let key in values) {
      farr.push(key)
      varr.push(`'${values[key]}'`)
    }
    farr = farr.join(',')
    varr = varr.join(',')
    let sql = `INSERT INTO ${accountTable} (${farr}) VALUE (${varr})`
    db.common(sql, function (res) {
      callback(res)
    })
  },
  // 角色表
  accountrole (cb) {
    let sql = `select * from ${roleTable} `
    db.common(sql, function (res) {
      cb(res)
    })
  }
}

module.exports = accountBusiness
