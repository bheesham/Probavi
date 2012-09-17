
/*
	
	The Expression object. Will handle loading and saving.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {

  this.Expression = function() {
    return this;
  };

  Expression.prototype.save = function(name, regexp, params, ui) {
    this.name = name;
    this.regexp = regexp;
    this.params = params;
    return void 0;
  };

  Expression.prototype.load = function(id, ui) {
    return void 0;
  };

}).call(this);
