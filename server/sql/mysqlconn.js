var mysql = require('mysql')
// 创建连接对象
var conn = mysql.createConnection({
  'host': 'localhost',
  'port': '3306',
  'user': 'root',
  'password': 'root',
  'database': 'nubia'
})
// 连接，mysql服务记得启动
conn.connect()

module.exports = function (sql) {
  let promise = new Promise((resolve, reject) => {
    conn.query(sql, function (err, result) {
      if (err) {
        reject(err)
        return false
      }
      resolve(result)
    })
  })
  return promise
}
