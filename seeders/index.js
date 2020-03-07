const fs = require('fs');
const path = require('path');

let seeders = {};
let files = fs.readdirSync(__dirname);
files.filter(file => file !== 'index.js').forEach(file => {
  seeders[file.substr(0, file.length - 3)] = require(path.resolve(__dirname, file));
});
module.exports = seeders;

