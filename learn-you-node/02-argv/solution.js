// Generated by CoffeeScript 1.6.3
(function() {
  var i, x, _i, _len, _ref;

  x = 0;

  _ref = process.argv.slice(2);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i];
    x += parseInt(i);
  }

  console.log(x);

}).call(this);