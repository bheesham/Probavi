
/*
	
	A regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var field, param, tester, _i, _j, _len, _len1, _ref, _ref1;

  tester = new Tester;

  _ref = Object.keys(tester.params);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    param = _ref[_i];
    document.getElementById(param).onclick = function() {
      if (tester.params.debug === true) {
        console.log(this.id + " has changed to: " + this.checked.toString());
      }
      return tester.update_params();
    };
  }

  _ref1 = Object.keys(tester.fields);
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    field = _ref1[_j];
    tester.fields[field].onkeyup = function() {
      if (tester.params.debug === true) {
        console.log(this.id + " has changed to: " + this.value);
      }
      return tester.update_fields();
    };
  }

  if (tester.debug === true) {
    return this.tester = tester;
  }

}).call(this);
