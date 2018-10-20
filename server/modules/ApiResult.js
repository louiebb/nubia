module.exports = function (_result, _data, _message) {
  let result = {status: _result, data: _data || null, message: _message || null}
  return JSON.stringify(result)
}
