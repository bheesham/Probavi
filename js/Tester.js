
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

  Tester.prototype.run = function(regexp, subject, params, replace) {
    var result, __r, __r_params;
    __r_params = "";
    if (params.ignorecase) {
      __r_params += "i";
    }
    if (params.global) {
      __r_params += "g";
    }
    if (params.multiline) {
      __r_params += "m";
    }
    try {
      __r = new RegExp(regexp, __r_params);
    } catch (e) {
      return -1;
    }
    if ((replace != null) && replace.length > 0) {
      result = new Function("regexp", "subject", "replace", "return subject.replace(regexp, replace)");
    } else {
      result = new Function("regexp", "subject", "return subject.match(regexp)");
    }
    return result(__r, subject, replace);
  };

}).call(this);
