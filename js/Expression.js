
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

  Expression.prototype.save = function(data) {
    var id, saved;
    id = Math.round(new Date().getTime() / 1000);
    locache.session.set(id, data);
    saved = locache.session.get("saved");
    if (saved != null) {
      saved.push(id);
    } else {
      saved = [id];
    }
    locache.session.set("saved", saved);
    return id;
  };

  Expression.prototype.load = function(id, ui) {
    return void 0;
  };

}).call(this);
