
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

  Tester.prototype.run = function(search, subject, replace) {
    var result;
    if (replace != null) {
      result = new Function("search", "subject", "replace", "return subject.replace(search, replace)");
    } else {
      result = new Function("search", "subject", "return subject.match(search)");
    }
    return result(search, subject, replace);
  };

}).call(this);
