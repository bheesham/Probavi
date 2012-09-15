###
	
	A regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

ui = new UI
highlighter = new Highlighter

highlighter.init()

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

if ui.debug == true
	return this.ui = ui