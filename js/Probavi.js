
/*
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var expression, field, get_result, load_exp, param, reload_saved, tester, ui, _i, _j, _len, _len1, _ref, _ref1;

  ui = new UI;

  tester = new Tester;

  expression = new Expression;

  get_result = function() {
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

  document.getElementById("save-now-expression").onclick = function() {
    ui.log("Saving new content");
    ui.fields["save-regexp"].value = ui.fields.regexp.value;
    ui.fields["save-global"].checked = ui.fields.global.checked;
    ui.fields["save-ignorecase"].checked = ui.fields.ignorecase.checked;
    ui.fields["save-multiline"].checked = ui.fields.multiline.checked;
    $('#expressions').modal("toggle");
    return void 0;
  };

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
    ui.fields["save-multiline"].checked = false;
    return reload_saved(ui, expression);
  };

  reload_saved = function() {
    var cached_expression, load_button, new_saved, saved, saved_expressions, _k, _l, _len2, _len3, _ref2, _results;
    _ref2 = ui.fields["saved-expressions"].childNodes;
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      saved = _ref2[_k];
      if (saved.id != null) {
        ui.fields["saved-expressions"].removeChild(saved.id);
      }
    }
    saved_expressions = expression.saved();
    _results = [];
    for (_l = 0, _len3 = saved_expressions.length; _l < _len3; _l++) {
      cached_expression = saved_expressions[_l];
      saved = expression.load(cached_expression);
      new_saved = document.createElement("li");
      load_button = document.createElement("button");
      load_button.type = "button";
      load_button.className = "btn load-button";
      load_button.innerText = "Load";
      load_button.onclick = function() {
        return load_exp(this, ui, expression);
      };
      new_saved.innerHTML = saved.name;
      new_saved.id = "saved-expression-" + cached_expression;
      ui.fields["saved-expressions"].appendChild(new_saved);
      _results.push(new_saved.appendChild(load_button));
    }
    return _results;
  };

  reload_saved(ui, expression);

  load_exp = function(that) {
    var id, saved;
    id = that.parentNode.id.split("-")[2];
    saved = expression.load(id);
    if (saved != null) {
      ui.fields.regexp.value = saved.regexp;
      ui.fields.global.checked = saved.global;
      ui.fields.ignorecase.checked = saved.ignorecase;
      ui.fields.multiline.checked = saved.multiline;
      ui.update_params();
      ui.update_fields();
      ui.fields.regexp.focus();
      get_result();
      return $('#expressions').modal("toggle");
    }
  };

  $('#expressions').modal({
    keyboard: false,
    show: false
  });

}).call(this);
