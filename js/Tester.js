
/*
	
	A class to test regular expressions.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {

  this.Tester = function() {
    return void 0;
  };

  Tester.prototype.run = function(search, subject, params, replace) {
    var param, regexp, result, _i, _len;
    for (_i = 0, _len = params.length; _i < _len; _i++) {
      param = params[_i];
      if (param === true) {
        console.log(param);
      }
    }
    regexp = new RegExp(subject, "gim");
    if ((replace != null) && replace.length > 0) {
      result = new Function("regexp", "subject", "replace", "return subject.replace(regexp, replace");
    } else {
      result = new Function("regexp", "subject", "return subject.match(regexp)");
    }
    return result(regexp, subject, replace);
  };

}).call(this);
