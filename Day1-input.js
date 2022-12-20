var fs = require('fs');

var input = fs.readFileSync('./d1-input.txt')

var data = input.toString ()

var splitData = data.split ('\n')

var currentElfTotal=0;
var allElfTotals=[];

// splitData.forEach (element => {
//   if (element == ""){
//   allElfTotals.push(currentElfTotals);
//   currentElfTotals=0;
// }
// else {
//   currentElfTotals=parseInt(element);
// }});

console.log (splitData)

for (let index = 0; index < splitData.length; index++) {
  var line = splitData [index];
  if (line == "") {
    allElfTotals.push(currentElfTotal);
    currentElfTotal=0;
  }
  else { 
    currentElfTotal = currentElfTotal + parseInt(line);
}};


console.log (allElfTotals)

var greedyElf = 0

function getGreatest(allElfTotals) {
  if (greedyElf < allElfTotals) {
      greedyElf = allElfTotals;
  }
}

allElfTotals.forEach(getGreatest)

console.log (greedyElf)

// console.log (input)
// console.log (splitData)
// console.log (allElfTotals)