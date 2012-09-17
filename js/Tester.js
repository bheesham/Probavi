
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
    var r_params, regexp, result;
    r_params = "";
    if (params.ignorecase) {
      r_params += "i";
    }
    if (params.global) {
      r_params += "g";
    }
    if (params.multiline) {
      r_params += "m";
    }
    try {
      regexp = new RegExp(search, r_params);
    } catch (e) {
      return -1;
    }
    if ((replace != null) && replace.length > 0) {
      result = new Function("regexp", "subject", "replace", "return subject.replace(regexp, replace)");
    } else {
      result = new Function("regexp", "subject", "return subject.match(regexp)");
    }
    return result(regexp, subject, replace);
  };

}).call(this);
