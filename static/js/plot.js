var trace = {
    x: ["2018", "2019"],
    y: [40, 70],
    type: "bar"
  };
  
  var data = [trace];
  
  var layout = {
    // title: "",
    xaxis: { title: "Year"},
    yaxis: { title: "# of Users"}
  };
  
  Plotly.newPlot("plot", data, layout);