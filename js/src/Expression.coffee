###
	
	The Expression object. Will handle loading and saving.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

this.Expression = ->
	return this

# Save to cache
Expression.prototype.save = (name, regexp, params, ui) ->
	this.name 		= name
	this.regexp 	= regexp
	this.params 	= params
	undefined

# Load from cache
Expression.prototype.load = (id, ui) ->
	undefined