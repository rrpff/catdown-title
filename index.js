module.exports = function(){
	// Every time HTML is rendered
	this.on("render", function(preview, html){
		// Get first h1, and its value if found.
		var headers = preview.getElementsByTagName("h1"),
			title = headers && headers[0] && headers[0].innerHTML.trim() || null;
			
		// Emit a "title" event with the header title.
		this.signal("title", title);
	}.bind(this));
}