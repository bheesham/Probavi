###
	
	A class to test regular expressions.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

this.Tester = ->
	undefined

Tester.prototype.run = (search, subject, params, replace) ->
	for param in params
		if param == true
			console.log(param)	
	regexp = new RegExp(subject, "gim")
	if replace? and replace.length > 0
		result = new Function("regexp", "subject", "replace"
		"return subject.replace(regexp, replace")
	else
		result = new Function("regexp", "subject",
		"return subject.match(regexp)")
	return result(regexp, subject, replace);