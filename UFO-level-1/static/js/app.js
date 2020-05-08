// from data.js
var tableData = data;

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