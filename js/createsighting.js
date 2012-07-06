function create_sightingbasket() {
	try {
		/*
		// create the butterfly basket: 
		if(window.localStorage) {
			if(!window.localStorage.bf_basket) {
				window.localStorage.bf_basket = JSON.stringify([]);
				if(window.localStorage.length == 0) { throw "basketcreate_err"; }
				// .trigger('create') is needed in addition to .append() to apply the mobile styles to the new button:
				$("#startoptions").append("<p><a href='#' data-role='button' onclick='javascript:delete_basket();'>Delete basket</a><p/>").trigger('create');
			}
		} else {
			throw "locstor_err";
		}
		*/
	} catch(e) {
		var errormsg = "An error occurred while trying to create the butterfly basket.\n";
		if(e == "locstor_err") {
			errormsg += "Local storage isn't supported by your device.";
		} else if(e == "basketcreate_err") {
			errormsg += "The butterfly basket couldn't be created.";	
		} else {
			errormsg += "Error message: " + e.message;
		}
		alert(errormsg);
	}
}

function create_sightingobject() {
	try {
		alert("label clicked");
		/*
		var d = new Date();
		var id = d.getFullYear()+"_"+d.getMonth()+"_"+d.getDay()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds();
		var sighting = {
			id: id,
			bf_name: "",
			bf_amount: 0,
			bf_location: ""
		};
		if(typeof(sighting) == "object") {
			alert("object");
			return sighting;
		} else {
			throw "init_err";
		}
		*/
	}
	catch(e) {
		if(e == "error") { alert("specific error"); }
		if(e == "all_err") { alert("initialisation failed!"); }
	}
}

function delete_basket() {
	window.localStorage.clear();
	if(window.localStorage.length == 0) { alert("basket deleted."); }
}
