var main = function () {
	"use strict";
	
	// this is actually just one string,
	// but I spread it out over two lines
	// to make it easier to read.
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
		"tags=dogs&format=json&jsoncallback=?"; 
		
	$.getJSON(url, function (flickrResponse) {
		// instead of printing entire object,
		// we'll iterate over each item object using forEach loop & 
		// print out each URL individually
		flickrResponse.items.forEach (function (photo) {
			console.log(photo.media.m);	
		});
	});
};

$(document).ready(main);