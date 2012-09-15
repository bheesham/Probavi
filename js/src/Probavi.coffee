###
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

ui = new UI
tester = new Tester

# Make sure that if anything changes, we update everything
for param in Object.keys(ui.params)
	document.getElementById(param).onclick = ->
		if ui.params.debug == true
			console.log(this.id + " has changed to: " + this.checked.toString())
		ui.update_params()

for field in Object.keys(ui.fields)
	ui.fields[field].onkeyup = ->
		if ui.params.debug == true
			console.log(this.id + " has changed to: " + this.value)
		ui.update_fields()
		ui.fields.result.innerText = tester.run(ui.values.search, ui.values.subject, ui.values.replace)

ui.fields.search.focus()

if ui.debug == true
	return this.ui = ui