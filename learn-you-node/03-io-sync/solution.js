// Generated by CoffeeScript 1.6.3
(function() {
  var data, fs;

  fs = require('fs');

  data = fs.readFileSync(process.argv[2], 'utf8');

  console.log(data.split('\n').length - 1);

}).call(this);