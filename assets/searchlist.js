// AGNES VAILLE FALLS
var trail0 = {
    lat: 38.71363894781356,
    lon:  -106.23284433353807, 
    sourceURL: "https://dayhikesneardenver.com/agnes-vaille-falls-hike/",
    image: "assets/img/placeholder_220.png"
};

// CAVE TRAIL AT CASTLEWOOD CANYON
var trail1 = {
    lat: 39.35473428425068,
    lon: -104.76567824164951,
    sourceURL: "https://dayhikesneardenver.com/cave-trail-castlewood-canyon/",
    image: "assets/img/placeholder_220.png"
};

//Kenosha-pass-hike
var trail2 = {
    lat: 39.428147834862216,
    lon:  -105.75537822939526, 
    sourceURL: "https://dayhikesneardenver.com/kenosha-pass-hike/",
    image: "assets/img/placeholder_220.png"
};  

//Silver-Dollar-murray-lakes-trail
var trail3 = {
    lat: 39.63383387963697,
    lon:  -105.72499156161547, 
    sourceURL: "https://dayhikesneardenver.com/silver-dollar-murray-lakes-trail/",
    image: "assets/img/placeholder_220.png"
};
//Chimney-Gulch-Trail-windy-saddle-park
var trail4 = {
    lat: 39.754775710150405,
    lon:  -105.2301925078648, 
    sourceURL: "https://dayhikesneardenver.com/chimney-gulch-trail-windy-saddle-park/",
    image: "assets/img/placeholder_220.png"
};
//Bear-peak-near-boulder
var trail5 = {
    lat: 39.94865790179421,
    lon:  -105.25743634842041, 
    sourceURL: "https://dayhikesneardenver.com/bear-peak-near-boulder/",
    image: "assets/img/placeholder_220.png"
};
//Four-lakes-and-waterfall-loop-rocky-mountain-national-park
var trail6 = {
    lat: 40.31942120417979,
    lon:  -105.64347195009509, 
    sourceURL: "https://dayhikesneardenver.com/4-lakes-and-waterfall-loop-rocky-mountain-national-park",
    image: "assets/img/placeholder_220.png"
};
//Elk Valley Trail in Roxborough State park 
var trail7 = {
    lat: 39.438441022206185,
    lon: -105.06845996764503,
    sourceURL: "https://dayhikesneardenver.com/elk-valley-trail-roxborough-state-park/",
    image: "assets/img/placeholder_220.png"
};

//Chautauqua-loop-boulder-colorado
var trail8 = {
    lat: 40.035893195528004,
    lon:  -105.27624178470296, 
    sourceURL: "https://dayhikesneardenver.com/chautauqua-loop-boulder-colorado/",
    image: "assets/img/placeholder_220.png"
};
//Rocky Mountain National Park
var trail9 = {
    Lat : 40.208710255449716,
    Long: -105.56656213326917,
    sourceURL:"https://dayhikesneardenver.com/bluebird-lake-hike-rocky-mountain-national-park/",
    image: "assets/img/placeholder_220.png"
};
 //Paint Mine Hike
var trail10 = {
    Lat : 39.026189285435095,
    Long: -104.27043508937867,
    sourceURL:"https://dayhikesneardenver.com/paint-mines-hike-near-colorado-springs/",
    image: "assets/img/placeholder_220.png"
};
 //Maroon-bells
var trail11 = {
    Lat : 39.11677081615352,
    Long: -106.93253885267049,
    sourceURL:"https://dayhikesneardenver.com/maroon-bells-colorado/",
    image: "assets/img/placeholder_220.png"
};
 //Indian-creek loop
var trail12 = {
    Lat : 39.380205124755314, 
    Long: -105.10505170459511,  
    sourceURL:"https://dayhikesneardenver.com/indian-creek-loop-hike/",
    image: "assets/img/placeholder_220.png"
};
 //Santa fe Palmer lake
var trail13 = {
    Lat : 39.123760838766586, 
    Long: -104.91118009019083,
    sourceURL:"https://dayhikesneardenver.com/santa-fe-regional-trail-palmer-lake/",
    image: "assets/img/placeholder_220.png"
};
 //Golden Gate Canyon
var trail14 = {
    Lat : 39.84353838629611,
    Long: -105.40434703353188,
    sourceURL:"https://dayhikesneardenver.com/horseshoe-trail-golden-gate-canyon-park/",
    image: "assets/img/placeholder_220.png"
};
 //Loveland Pass   
var trail15 = {
    Lat : 39.6789050490315,
    Long: -105.87842037951032,
    sourceURL:"https://dayhikesneardenver.com/mt-sniktau-hike-loveland-pass/",
    image: "assets/img/placeholder_220.png"
};
    







trailsArray = [trail0, trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8, trail9, trail10, trail11, trail12, trail13, trail14, trail15];


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

function initCards () {
    for (const index in trailsArray) {
        $(`<div class=card style="width: 200px;"id=trail${index}></div>`).appendTo($('#map-size'));    
    }
}