// from data.js
var tableData = data;

// YOUR CODE HERE!
// *** console.log(tableData);

// Get a reference to the table body
var tbody = d3.select('tbody');
// *** console.log(tbody);

 // Step 5: Use d3 to update each cell's text with
 // weather report values (weekday, date, high, low)
 data.forEach(function(ufoData) {
   // *** console.log(ufoData);
   var row = tbody.append("tr");
   Object.entries(ufoData).forEach(function([key, value]) {
     // *** console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });


 // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// button.onclick=runEnter;
// form.onsubmit=runEnter;

console.log(button);
console.log(form);

// Complete the event handler function for the form
function runEnter() {
  console.log("in runEnter");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  console.log(inputElement);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(eventDate => tableData.datetime === inputValue);

  console.log(filteredData);
};
