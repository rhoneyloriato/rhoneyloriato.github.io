
var initialCoordinates = []; // Itapuã
var initialZoomLevel = 13;


var muxiCoordinates = [-20.346813, -40.285280];
var muxiMarkerMessage = "Minha casa.<br>Olá mundo!";


if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(verltdlong);
			
else{
	alert('Ops, não foi possivel pegar a posição');
}

function verltdlong(position){
	var lat = position.coords.latitude;
	var long = position.coords.longitude;

	initialCoordinates[0] = lat;
	initialCoordinates[1] = long
	// cria um mapa no "mapa" div, define a vista para um determinado local e aplique zoom
	var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
	}).addTo(map);


	//add marcador e mensagem
	L.marker(muxiCoordinates).addTo(map)
	.bindPopup(muxiMarkerMessage)
	.openPopup();

	var popup = L.popup();

	function onMapClick(e){
		popup
		.setLatLng(e.latlng)
		.setContent("Você clicou no mapa em" + e.latlng.toString())
		.openOn(map);
	}

	
	function addMapMarker(e){
		L.marker(e.latlng)
		.addTo(map);

	}
	
	map.on('click', onMapClick);
	map.on('contextmenu', addMapMarker);

}		

