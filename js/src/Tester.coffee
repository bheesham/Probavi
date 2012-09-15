###
	
	A class to test regular expressions.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

this.Tester = ->
	undefined

Tester.prototype.run = (search, subject, replace) ->
	if replace? and replace.length > 0
		result = new Function("search", "subject", "replace",
		"return subject.replace(search, replace)")
	else
		result = new Function("search", "subject", 
		"return subject.match(search)")

	return result(search, subject, replace);