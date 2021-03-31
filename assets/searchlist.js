var access_token = 'pk.eyJ1IjoiY3doaXJsIiwiYSI6ImNrbXBtYTlsOTBmejEydW1hem5jaGF0eDEifQ.0-SvFdQTk2LJ77SUO_i1hA';

var lat = 39.7392;
var lon = -104.9903;

var mymap = L.map('mapid').setView([lat, lon], 13);
var marker = L.marker([lat, lon]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: access_token
}).addTo(mymap);