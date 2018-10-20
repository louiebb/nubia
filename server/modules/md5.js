var crypto = require('crypto');

module.exports = function(value){
	var md5 = crypto.createHash('md5');
	return md5.update(value, 'utf8').digest('hex');
}
