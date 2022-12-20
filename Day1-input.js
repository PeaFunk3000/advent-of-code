var fs = require('fs');

var input = fs.readFileSync('./d1-input.txt')

var data = input.toString()

var splitData = data.split('\n')

var currentElfTotal = 0;
var allElfTotals = [];

// splitData.forEach (element => {
//   if (element == ""){
//   allElfTotals.push(currentElfTotals);
//   currentElfTotals=0;
// }
// else {
//   currentElfTotals=parseInt(element);
// }});

console.log(splitData)

for (let index = 0; index < splitData.length; index++) {
  var line = splitData[index];
  if (line == "") {
    allElfTotals.push(currentElfTotal);
    currentElfTotal = 0;
  }
  else {
    currentElfTotal = currentElfTotal + parseInt(line);
  }
};


console.log(allElfTotals)

// var greedyElf = 0
var greedyElves = [0, 0, 0]

// [1,6,9,6,3,8,8,9,10]
// [0,0,0]


function getGreatest(allElfTotals) {
  // if (greedyElf < allElfTotals) {
  //   greedyElf = allElfTotals;
  // }
  if (greedyElves[0] < allElfTotals ) {
    greedyElves[2] = greedyElves [1]
    greedyElves[1] = greedyElves [0]
    greedyElves[0] = allElfTotals;
  }
  else if (greedyElves[1] < allElfTotals ) {
    greedyElves[2] = greedyElves [1]
    greedyElves[1] = allElfTotals;
  }
  else if (greedyElves[2] < allElfTotals ) {
    greedyElves[2] = allElfTotals;
  }
}

allElfTotals.forEach(getGreatest)

var tripleGreed = 0;

for (let index = 0; index < greedyElves.length; index++) { 
  tripleGreed += greedyElves[index];
}

// console.log(greedyElf)

console.log(greedyElves)
console.log(tripleGreed)

// console.log (input)
// console.log (splitData)
// console.log (allElfTotals)