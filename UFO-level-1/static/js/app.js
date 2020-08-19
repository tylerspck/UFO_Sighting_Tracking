// from data.js
var tableData = data;
console.log(tableData)

var tbody = d3.select("tbody");
var button = d3.select("#button");
var input = d3.select("#form")

// YOUR CODE HERE!

// create a table with a row/cell for each row of item for dataset
function init() {
    tableData.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

button.on('click', search_filter);
input.on('submit',search_filter);

function search_filter () {
    // prevent from page refresh
    d3.event.preventDefault();

    var input_date = d3.select("#datetime");

    var input_Value = input_date.property("value");

    console.log(input_Value);
    console.log(tableData);

    var filtered_dates = tableData.filter(date => date.datetime === input_Value);

    console.log(filtered_dates)

    var list= d3.select(".summary");

    list.html("");

    filtered_dates.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
};

init();