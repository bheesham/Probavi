###
	
	Handles getting the values and parameters from the UI.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###


this.UI = ->
	this.fields = {
		regexp: 	document.getElementById("regexp")
		subject: 	document.getElementById("subject")
		replace: 	document.getElementById("replace")

		result: 	document.getElementById("result")
		
		global: 		document.getElementById("global")
		ignorecase: document.getElementById("ignorecase")
		multiline: 	document.getElementById("multiline")

		# Saving fields
		"save-name": 		document.getElementById("save-name")
		"save-regexp": 	document.getElementById("save-regexp")
		"save-global": 	document.getElementById("save-global")
		"save-ignorecase": 	document.getElementById("save-ignorecase")
		"save-multiline": 	document.getElementById("save-multiline")
	}

	this.values = {
		regexp: 	""
		subject: 	""
		replace: 	""

		"save-name": 	""
		"save-regexp": 	""
		"save-global": 	""
	}

	this.params = {
		global: 				false
		ignorecase: 		false
		multiline: 			false

		"save-global": 				false
		"save-ignorecase": 		false
		"save-multiline": 		false		
	}

	undefined

# Our own little logger.
UI.prototype.debug = ->
	return document.getElementById("debug").checked

UI.prototype.log = (str) ->
	if this.debug()
		console.log(str)

UI.prototype.dir = (obj) ->
	if this.debug()
		console.dir(obj)

# Updates the fields
UI.prototype.update_fields = ->
	# Simply looks at the Options checkboxes and returns ticked or not
	for field in Object.keys(this.values)
		if this.fields[field]?
			this.values[field] = this.fields[field].value
	undefined

# Updates the Regular Expression parameters
UI.prototype.update_params = ->
	# Simply looks at the Options checkboxes and returns ticked or not
	for param in Object.keys(this.params)
		if this.fields[param]?
			this.params[param] = this.fields[param].checked
	undefined