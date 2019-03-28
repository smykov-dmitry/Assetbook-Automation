const fs = require('fs');
fs.createReadStream('package.json').pipe(fs.createWriteStream('./../../package.json'));
fs.createReadStream('tsconfig.json').pipe(fs.createWriteStream('./../../tsconfig.json'));
fs.createReadStream('protractor.conf.ts').pipe(fs.createWriteStream('./../../protractor.conf.ts'));
fs.mkdirSync('./../../test');
fs.mkdirSync('./../../elements');
fs.mkdirSync('./../../logic');
fs.mkdirSync('./../../testData');
fs.mkdirSync('./../../servicies');
