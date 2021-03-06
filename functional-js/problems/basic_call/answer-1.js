// Generated by CoffeeScript 1.6.3
(function() {
  var duckCount, test,
    __slice = [].slice;

  duckCount = function() {
    var args, toDuckTotal;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    toDuckTotal = function(prev, curr, i, arr) {
      var hasQuack, x;
      hasQuack = function(x) {
        return Object.prototype.hasOwnProperty.call(x, 'quack');
      };
      x = hasQuack(curr) ? 1 : 0;
      return prev + x;
    };
    return args.reduce(toDuckTotal, 0);
  };

  module.exports = duckCount;

  test = function() {
    var birds, ok, turkey;
    ok = require('assert').ok;
    turkey = Object.create({
      quack: true
    });
    birds = [
      turkey, {
        quack: true
      }, {
        quack: true
      }, {
        quack: true
      }
    ];
    return ok(duckCount.apply(null, birds) === 3);
  };

}).call(this);
