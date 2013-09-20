(function($) {
    //get the highlighted text
	function getSelectionText() {
 	   var text = "";
    	if (window.getSelection) {
       		 text = window.getSelection().toString();
    	} else if (document.selection && document.selection.type != "Control") {
	        text = document.selection.createRange().text;
    	}
    	return text;
	}
	// jQuery plugin definition
	$.fn.highlite = function(params) {
		$("*").keypress(function(evnt){
			if(evnt.shiftKey && evnt.which == 72){
				console.log("init highlighted");
				alert(getSelectionText());
			}
		});
	};

})(jQuery);
