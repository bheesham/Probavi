###
	
	The Highlighter object. Controls for the Highlighter.

	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###


this.Highlighter = ->
	undefined

Highlighter.prototype.init = (textarea, ui) ->
	this.textarea = textarea
	this.ui = ui
	undefined

Highlighter.prototype.top_line = ->
	undefined