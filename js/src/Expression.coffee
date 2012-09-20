###
	
	The Expression object. Will handle loading and saving.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

this.Expression = ->
	return this

# Save to cache
Expression.prototype.save = (data) ->
	# Generate an ID based on the time
	id = Math.round(new Date().getTime() / 1000)
	locache.set(id, data)

	# Be sure to add this to the list of saved
	saved = locache.get("saved")
	if saved?
		saved.push(id)
	else
		saved = [id]
	locache.set("saved", saved)
	return id

# Load from cache
Expression.prototype.load = (id) ->
	return locache.get(id)

Expression.prototype.saved = () ->
	saved = locache.get("saved")
	if saved?
		return saved
	else
		return {}