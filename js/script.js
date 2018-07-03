	var geocoder;
	var map;
	
	function initMap() {
	geocoder = new google.maps.Geocoder();
	var location = {lat: 51.919438, lng:19.145136 };
	map = new google.maps.Map(
      document.getElementById("map"), {zoom: 4, center: location});
	}
	
	function codeAddress(which) {
		var address = document.getElementById('address'.concat(which)).value;
		geocoder.geocode({'address': address}, function(results, status) {
		if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
		var marker = new google.maps.Marker({map: map,position: results[0].geometry.location})
		var localization=document.getElementById('latitiude'.concat(which)).value = results[0].geometry.location.lat();
		var localization=document.getElementById('longitiude'.concat(which)).value = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
	}
	
	function CountDistance(){
    var lat1=document.getElementById('latitiude1').value;
	var lat2=document.getElementById('latitiude2').value;
	var lon1=document.getElementById('longitiude1').value;
	var lon2=document.getElementById('longitiude2').value;
	var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
	var result=document.getElementById('result').value=d
	}