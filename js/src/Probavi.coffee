###
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

ui = new UI
tester = new Tester
expression = new Expression

get_result = ->
	ui.fields.result.innerText = ""
	if ui.values.subject.length > 0 and ui.values.regexp.length > 0
		result = tester.run(ui.values.regexp, ui.values.subject, 
		ui.params, ui.values.replace)
		
		ui.log("The result's type is " + typeof result)
		ui.log("The result contained:")
		ui.dir(result)

		try
			if typeof result == "object"
				match = 0
				for item in result
					ui.fields.result.innerHTML += "("  + match + ") "
					ui.fields.result.innerHTML += item + " <br>"
					match++
			else if result == -1
				ui.fields.result.innerText = "Syntax error"
			else
				ui.fields.result.innerText = result
		catch e
			ui.dir(e)
			if e.type == "non_object_property_load"
				ui.fields.result.innerText = "No matches"

# Make sure that if anything changes, we update everything
for param in Object.keys(ui.params)
	document.getElementById(param).onclick = ->
		ui.log(this.id + " has changed to: " + this.checked.toString())
		ui.update_params()
		get_result(ui, tester)

for field in Object.keys(ui.fields)
	ui.fields[field].onkeyup = ->
		ui.log(this.id + " has changed to: " + this.value)
		ui.update_fields()
		get_result(ui, tester)

# Let's update once when we load the page
ui.update_params()
ui.update_fields()
get_result(ui, tester)

ui.fields.regexp.focus()

if ui.debug()
	this.ui = ui
	this.tester = tester

document.getElementById("save-now-expression").onclick = ->
	ui.log("Saving new content")
	ui.fields["save-regexp"].value = 				ui.fields.regexp.value
	ui.fields["save-global"].checked = 			ui.fields.global.checked
	ui.fields["save-ignorecase"].checked = 	ui.fields.ignorecase.checked
	ui.fields["save-multiline"].checked = 	ui.fields.multiline.checked
	$('#expressions').modal("toggle")
	undefined

document.getElementById("save-btn").onclick = ->
	ui.log("Saving content")
	data = {
		name: 	ui.values["save-name"]
		regexp: ui.values["save-regexp"]

		global: 		ui.params["save-global"]
		ignorecase:	ui.params["save-ignorecase"]
		multiline: 	ui.params["save-multiline"]
	}
	
	save_id = expression.save(data)
	ui.log("Saved with id: " + save_id)

	# Reset them to their original state
	ui.fields["save-name"].value = 		""
	ui.fields["save-regexp"].value = 	""

	ui.fields["save-global"].checked = 			true	
	ui.fields["save-ignorecase"].checked = 	true
	ui.fields["save-multiline"].checked = 	false

	reload_saved(ui, expression)

# Do loading here
reload_saved = ->
	# First, clear the saved ones
	for saved in ui.fields["saved-expressions"].childNodes
		if saved.id?
			ui.fields["saved-expressions"].removeChild(saved.id)

	saved_expressions = expression.saved()
	for cached_expression in saved_expressions
		saved = expression.load(cached_expression)
		new_saved = document.createElement("li")
		load_button = document.createElement("button")

		load_button.type = "button"
		load_button.className = "btn load-button"
		load_button.innerText = "Load"

		load_button.onclick = ->
			load_exp(this, ui, expression)

		new_saved.innerHTML = saved.name
		new_saved.id = "saved-expression-" + cached_expression
		
		ui.fields["saved-expressions"].appendChild(new_saved)
		new_saved.appendChild(load_button)

reload_saved(ui, expression)

load_exp = (that) ->
	id = that.parentNode.id.split("-")[2]
	saved = expression.load(id)
	if saved?
		ui.fields.regexp.value = 				saved.regexp
		ui.fields.global.checked = 			saved.global
		ui.fields.ignorecase.checked = 	saved.ignorecase
		ui.fields.multiline.checked = 	saved.multiline
		ui.update_params()
		ui.update_fields()
		ui.fields.regexp.focus()
		get_result()
		$('#expressions').modal("toggle")

# Activate the modal
$('#expressions').modal({
  keyboard: false
  show: false
})
