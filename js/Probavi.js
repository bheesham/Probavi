
/*
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var field, param, tester, ui, update, _i, _j, _len, _len1, _ref, _ref1;

  ui = new UI;

  tester = new Tester;

  update = function(ui) {
    return ui.fields.result.innerText = tester.run(ui.values.search, ui.values.subject, ui.values.replace);
  };

  _ref = Object.keys(ui.params);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    param = _ref[_i];
    document.getElementById(param).onclick = function() {
      if (ui.params.debug === true) {
        console.log(this.id + " has changed to: " + this.checked.toString());
      }
      ui.update_params();
      return update(ui);
    };
  }

  _ref1 = Object.keys(ui.fields);
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    field = _ref1[_j];
    ui.fields[field].onkeyup = function() {
      if (ui.params.debug === true) {
        console.log(this.id + " has changed to: " + this.value);
      }
      ui.update_fields();
      return update(ui);
    };
  }

  ui.fields.search.focus();

  if (ui.debug === true) {
    return this.ui = ui;
  }

}).call(this);
