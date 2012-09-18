
/*
	
	Handles getting the values and parameters from the UI.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {

  this.UI = function() {
    this.fields = {
      regexp: document.getElementById("regexp"),
      subject: document.getElementById("subject"),
      replace: document.getElementById("replace"),
      result: document.getElementById("result"),
      global: document.getElementById("global"),
      ignorecase: document.getElementById("ignorecase"),
      multiline: document.getElementById("multiline"),
      "saved-expressions": document.getElementById("saved-expressions"),
      "save-name": document.getElementById("save-name"),
      "save-regexp": document.getElementById("save-regexp"),
      "save-global": document.getElementById("save-global"),
      "save-ignorecase": document.getElementById("save-ignorecase"),
      "save-multiline": document.getElementById("save-multiline")
    };
    this.values = {
      regexp: "",
      subject: "",
      replace: "",
      "save-name": "",
      "save-regexp": "",
      "save-global": ""
    };
    this.params = {
      global: false,
      ignorecase: false,
      multiline: false,
      "save-global": false,
      "save-ignorecase": false,
      "save-multiline": false
    };
    return void 0;
  };

  UI.prototype.debug = function() {
    return document.getElementById("debug").checked;
  };

  UI.prototype.log = function(str) {
    if (this.debug()) {
      return console.log(str);
    }
  };

  UI.prototype.dir = function(obj) {
    if (this.debug()) {
      return console.dir(obj);
    }
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
      if (this.fields[param] != null) {
        this.params[param] = this.fields[param].checked;
      }
    }
    return void 0;
  };

}).call(this);
