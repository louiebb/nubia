var svgCaptcha = require('svg-captcha');  // npm install svg-captcha

exports.getCode = (req, res) => {
    var codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1il', // 验证码字符中排除 0o1il
        noise: 1, // 干扰线条的数量
        height: 54 
    }
    var captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase();     
    return captcha.data;   
}