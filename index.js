var fs = require('fs');
var path = require('path');

var entrokitty = fs.readFileSync(path.join(__dirname, '/names.txt')).toString().split('\n').filter(function (a) { return a; });

module.exports = function (replacement) {
	var cat = entrokitty[Math.floor(Math.random() * entrokitty.length)];
	if (replacement === undefined) {
		return cat;
	}
	return cat.replace(/ /g, replacement);
};
