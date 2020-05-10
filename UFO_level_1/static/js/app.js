// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select('tbody');
console.log(tbody);

 // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
 data.forEach(function(ufoData) {
   console.log(ufoData);
   var row = tbody.append("tr");

   Object.entries(ufoData).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
   });
 });

 // Step 5: Use d3 to update each cell's text with
 // weather report values (weekday, date, high, low)
 data.forEach(function(ufoData) {
   console.log(ufoData);
   var row = tbody.append("tr");
   Object.entries(ufoData).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
