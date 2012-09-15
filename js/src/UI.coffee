###
	
	The UI object. Handles getting the values and parameters from the UI.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###


this.UI = ->
	this.fields = {
		search: document.getElementById("search")
		subject: document.getElementById("subject")
		replace: document.getElementById("replace")
	}

	this.values = {
		search: ""
		subject: ""
		replace: ""
	}

	this.params = {
		case_sensitive: false
		debug: 					false
	}
	undefined

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
		if document.getElementById(param)?
			this.params[param] = document.getElementById(param).checked
	undefined