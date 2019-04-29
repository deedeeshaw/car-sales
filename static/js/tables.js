// d3.json("../static/data/tripdata_js.json").then(function (cycles) {

// // CREATE TABLE
// // using d3 to select the table
// var tBody = d3.select('tbody');
// // starting the loop with forEach to create the table
// cycles.forEach(cycle) => {
//     tBody.append("tr");
// // using object.values to store the values from the cycles_js
//     Object.values().forEach((cValues) => {
//         // adding the data cells
//         var cell = tBody.append("td");
//         // placing values in the table
//         cell.text(cValues);
//     });
//   });

// the route as url
  // d3.json("static/data/tripdata_js.json").then(function (data) {

  d3.json("/tables").then(function (data) {
    var column=["year", "startstationname", 
    "endstationname",
    "usertype", "gender", "birthyear", "tripduration"];
    var tbody = d3.select("tbody");
    data.forEach(cycle => {

        var row = tbody.append("tr");
        
        Object.entries(cycle).forEach(([key, value])=> {
         console.log("hello");
          if (column.includes(key)) {
                console.log(key, value);
                row.append("td").text(value);
            }
          });
         });
    });
  
// //   SEARCH THROUGH DATE/TIME COLUMN AND RETURN RESULTS THAT MATCH USER INPUT
// // Use d3 to select the filter table button
//   var ufofilter = d3.select(".btn");

//   ufofilter.on("click", function() {
    
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Select the input element and get the raw HTML node
    
//     // Get the value property of the input element
    
//       var filterElement = d3.select("#datetime");
//       var datetime = filterElement.property("value");
//         if (datetime) {
//           var uFilter = data.filter(ufo => ufo.datetime === datetime);
//     };

//     console.log(uFilter);
    
//       var filterElement = d3.select("#city");
//       var city = filterElement.property("value");
//         if (city){
//         if (city && datetime) {
//           uFilter = uFilter.filter(ufo => ufo.city === city);
//         }
//         else {
//           uFilter = data.filter(ufo => ufo.city === city);
//         };
//       };

//     console.log(uFilter);

//       var filterElement = d3.select("#shape");
//       var shape = filterElement.property("value");
      
//       if (shape) {
//         if (shape && datetime || city) {
//          uFilter = uFilter.filter(ufo => ufo.shape === shape);
//         }
//         else {
//           uFilter = data.filter(ufo => ufo.shape === shape);
//         };
//       };

//     console.log(uFilter);

//     d3.selectAll('td').remove()

//   // using d3 to select the table

//     var tBody = d3.select('.table>tbody');
    
// // starting the loop with forEach to create the table
//     uFilter.forEach((filteredufo) => {
//       tBody.append("tr");
// // using object.values to store the values from the ufo sighting data
//     Object.values(filteredufo).forEach((ufValues) => {
//         // adding the data cells
//         var cell = tBody.append("td");
//         // placing values in the table
//         cell.text(ufValues);
//     });
//   });
    
//   });