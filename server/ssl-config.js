var path = require('path'),
    fs = require("fs");

exports.privateKey = fs.readFileSync(path.join(__dirname, './private/backlotbank.key')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './private/backlotbank.com.pem')).toString();
