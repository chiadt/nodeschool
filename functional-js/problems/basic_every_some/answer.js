// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(valid) {
    var isValid;
    isValid = function(user) {
      return valid.some(function(v) {
        return v.id === user.id;
      });
    };
    return function(users) {
      return users.every(isValid);
    };
  };

}).call(this);