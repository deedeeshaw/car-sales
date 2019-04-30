// var ctx = document.getElementById("myAreaChart")
// Create a map object
var myMap = L.map("myMap", {
  center: [40.7829, -73.9654],
  zoom: 12
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// // An array containing each station name and location
// d3.json("/data").then(point => {
//   var stMarkers=["startstationlatitude", "startstationlongitude", 
//   "startstationname"];    
//       Object.entries(point).forEach(([key, value])=> {

//         if (stMarkers.includes(key)) {
//               console.log(key, value);
//               // (value);
//           }
//         });
//        });

var stations = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"
}];


// Loop through the station array and create one marker for each station, bind a popup containing its name and population add it to the map
for (var i = 0; i < stations.length; i++) {
  var station = stations[i];
  L.marker(station.location)
    .bindPopup("<h1>" + station.name + "</h1>")
    // <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}
