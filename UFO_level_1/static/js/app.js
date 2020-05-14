// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

// Get a whole table
var tbody = d3.select('tbody');

function builtTable(data){
  tbody.html(" ");
  data.forEach((dataLoad)=>{
    var row=tbody.append("tr");
    Object.values(dataLoad).forEach((value)=>{
      var cell=row.append("td");
      cell.text(value);
    });
  });

}
builtTable(tableData);



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


console.log(button);
console.log(form);

// Complete the event handler function for the form
function runEnter() {
  tbody.html("");
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

  var filteredData = tableData.filter(rowData => rowData.datetime === inputValue);
 
  console.log(filteredData);

  // If I call the function starting line 10, 
  // probably it works, instead of writing the same function again below...
  // I am keeping the function below for practice. Commenting out function call ... 

  // builtTable(filteredData)  


  filteredData.forEach(function(ufoData) {
    // *** console.log(ufoData);
    var rows = tbody.append("tr");
     Object.entries(ufoData).forEach(function([key, value]) {
       // *** console.log(key, value);
       var cell = rows.append("td");
       cell.text(value);
     });
   });

};
