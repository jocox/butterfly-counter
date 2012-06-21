function showposition() {
	// get users current position:
	$('#map').gmap('getCurrentPosition', function(position, status) {
		if(status == 'OK') {
			var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$('#map').gmap('addMarker', {'position': clientPosition, 'bounds': true});
			// TODO: change button text depending on if map is shown or not:
		}
	});
}