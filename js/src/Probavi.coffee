###
	
	The main controller for the regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

ui = new UI
tester = new Tester

update = (ui) ->
	ui.fields.result.innerText = ""
	if ui.values.subject.length > 0 and ui.values.search.length > 0
		result = tester.run(ui.values.search, ui.values.subject, 
		ui.params, ui.values.replace)
		
		ui.log("The result's type is " + typeof result)
		ui.log("The result contained:")
		ui.dir(result)

		try
			if typeof result == "object"
				for item in result
					ui.fields.result.innerHTML += item + " <br>"
			else
				ui.fields.result.innerText = result
		catch e if e typeof TypeError
			undefined
		catch e if e typeof SyntaxError
			
# Make sure that if anything changes, we update everything
for param in Object.keys(ui.params)
	document.getElementById(param).onclick = ->
		ui.log(this.id + " has changed to: " + this.checked.toString())
		ui.update_params()
		update(ui)

for field in Object.keys(ui.fields)
	ui.fields[field].onkeyup = ->
		ui.log(this.id + " has changed to: " + this.value)
		ui.update_fields()
		update(ui)

ui.fields.search.focus()

if ui.debug()
	return this.ui = ui