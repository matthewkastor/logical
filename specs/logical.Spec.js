var logical = require('../src/logical.js');
var fs = require('fs');
var path = require('path');
var specPath = path.resolve(__dirname, '../browser/tests/logical.test.js');
var specCode = fs.readFileSync(specPath, "utf8");
eval(specCode);
