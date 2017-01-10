var fs = require('fs');
var path = require('path');

var entrokitty = fs.readFileSync(path.join(__dirname, '/names.txt')).toString().split('\n').filter(function (a) { return a; });

module.exports = function () {
	return entrokitty[Math.floor(Math.random() * entrokitty.length)];
};
