
/*
	
	Handles getting the values and parameters from the UI.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {

  this.UI = function() {
    this.fields = {
      search: document.getElementById("search"),
      subject: document.getElementById("subject"),
      replace: document.getElementById("replace"),
      result: document.getElementById("result")
    };
    this.values = {
      search: "",
      subject: "",
      replace: ""
    };
    this.params = {
      debug: false
    };
    return void 0;
  };

  UI.prototype.update_fields = function() {
    var field, _i, _len, _ref;
    _ref = Object.keys(this.values);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      field = _ref[_i];
      if (this.fields[field] != null) {
        this.values[field] = this.fields[field].value;
      }
    }
    return void 0;
  };

  UI.prototype.update_params = function() {
    var param, _i, _len, _ref;
    _ref = Object.keys(this.params);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      if (document.getElementById(param) != null) {
        this.params[param] = document.getElementById(param).checked;
      }
    }
    return void 0;
  };

}).call(this);
