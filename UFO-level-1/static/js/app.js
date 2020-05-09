// from data.js
var tableData = data;

// mapping the values for the table
var date = tableData.map(sighting => sighting.datetime)
var city = tableData.map(sighting => sighting.city)
var state = tableData.map(sighting => sighting.state)
var country = tableData.map(sighting => sighting.country)
var shape = tableData.map(sighting => sighting.shape)
var duration = tableData.map(sighting => sighting.durationMinutes)
var comments = tableData.map(sighting => sighting.comments)

// appending to the html table
var table = d3.select("table");

var tbody = d3.select("tbody");


for (var i=0; i < tableData.length; i++){
    var row = tbody.append("tr");
    row.append("td").text(date[i])
    row.append("td").text(city[i])
    row.append("td").text(state[i])
    row.append("td").text(country[i])
    row.append("td").text(shape[i])
    row.append("td").text(duration[i])
    row.append("td").text(comments[i])
};

// creating the event listener for the filter bar

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
// select the input element
  var inputElement = d3.select("#datetime");

  // get the value 
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  //filtering the data by the input value
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  //mapping the filtered data
  var date = filteredData.map(sighting => sighting.datetime)
  var city = filteredData.map(sighting => sighting.city)
  var state = filteredData.map(sighting => sighting.state)
  var country = filteredData.map(sighting => sighting.country)
  var shape = filteredData.map(sighting => sighting.shape)
  var duration = filteredData.map(sighting => sighting.durationMinutes)
  var comments = filteredData.map(sighting => sighting.comments)

  // removing old table
  tbody.html("");

  
  // appending the filtered data
  for (var i=0; i < filteredData.length; i++){ 
    var row = tbody.append("tr");
    row.append("td").text(date[i])
    row.append("td").text(city[i])
    row.append("td").text(state[i])
    row.append("td").text(country[i])
    row.append("td").text(shape[i])
    row.append("td").text(duration[i])
    row.append("td").text(comments[i])
  };


});

