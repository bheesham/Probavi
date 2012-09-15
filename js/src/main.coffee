###
	
	A regular expression tester.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

tester = new Tester

# Make sure that if anything changes, we update everything
for param in Object.keys(tester.params)
	document.getElementById(param).onclick = ->
		if tester.params.debug == true
			console.log(this.id + " has changed to: " + this.checked.toString())
		tester.update_params()

for field in Object.keys(tester.fields)
	tester.fields[field].onkeyup = ->
		if tester.params.debug == true
			console.log(this.id + " has changed to: " + this.value)
		tester.update_fields()

if tester.debug == true
	return this.tester = tester