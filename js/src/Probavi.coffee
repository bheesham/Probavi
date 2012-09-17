###
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

ui = new UI
tester = new Tester
expression = new Expression

get_result = (ui, tester) ->
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

# Do loading here

# Activate the modal
$('#expressions').modal({
  keyboard: false
  show: false
})

console.dir(locache.session.get("saved"))