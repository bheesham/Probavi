
/*
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var expression, field, get_result, param, tester, ui, _i, _j, _len, _len1, _ref, _ref1;

  ui = new UI;

  tester = new Tester;

  expression = new Expression;

  get_result = function(ui, tester) {
    var item, match, result, _i, _len, _results;
    ui.fields.result.innerText = "";
    if (ui.values.subject.length > 0 && ui.values.regexp.length > 0) {
      result = tester.run(ui.values.regexp, ui.values.subject, ui.params, ui.values.replace);
      ui.log("The result's type is " + typeof result);
      ui.log("The result contained:");
      ui.dir(result);
      try {
        if (typeof result === "object") {
          match = 0;
          _results = [];
          for (_i = 0, _len = result.length; _i < _len; _i++) {
            item = result[_i];
            ui.fields.result.innerHTML += "(" + match + ") ";
            ui.fields.result.innerHTML += item + " <br>";
            _results.push(match++);
          }
          return _results;
        } else if (result === -1) {
          return ui.fields.result.innerText = "Syntax error";
        } else {
          return ui.fields.result.innerText = result;
        }
      } catch (e) {
        ui.dir(e);
        if (e.type === "non_object_property_load") {
          return ui.fields.result.innerText = "No matches";
        }
      }
    }
  };

  _ref = Object.keys(ui.params);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    param = _ref[_i];
    document.getElementById(param).onclick = function() {
      ui.log(this.id + " has changed to: " + this.checked.toString());
      ui.update_params();
      return get_result(ui, tester);
    };
  }

  _ref1 = Object.keys(ui.fields);
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    field = _ref1[_j];
    ui.fields[field].onkeyup = function() {
      ui.log(this.id + " has changed to: " + this.value);
      ui.update_fields();
      return get_result(ui, tester);
    };
  }

  ui.update_params();

  ui.update_fields();

  get_result(ui, tester);

  ui.fields.regexp.focus();

  if (ui.debug()) {
    this.ui = ui;
    this.tester = tester;
  }

  document.getElementById("save-btn").onclick = function() {
    var data, save_id;
    ui.log("Saving content");
    data = {
      name: ui.values["save-name"],
      regexp: ui.values["save-regexp"],
      global: ui.params["save-global"],
      ignorecase: ui.params["save-ignorecase"],
      multiline: ui.params["save-multiline"]
    };
    save_id = expression.save(data);
    ui.log("Saved with id: " + save_id);
    ui.fields["save-name"].value = "";
    ui.fields["save-regexp"].value = "";
    ui.fields["save-global"].checked = true;
    ui.fields["save-ignorecase"].checked = true;
    return ui.fields["save-multiline"].checked = false;
  };

  $('#expressions').modal({
    keyboard: false,
    show: false
  });

  console.dir(locache.session.get("saved"));

}).call(this);
