var fs = require('fs');

var input = fs.readFileSync('./d3-input.txt');

var data = input.toString();

var rucksacks = data.split('\n');
console.log(rucksacks);

var compartments = [];

rucksacks.forEach(rucksack => {
    var compartmentA = '';
    var compartmentB = '';
    for (var i = 0; i < rucksack.length; i++) {
        if (i < rucksack.length / 2) {
            compartmentA += rucksack[i];
        } else {
            compartmentB += rucksack[i];
        }
    }
    compartments.push([compartmentA, compartmentB])
});

console.log(compartments)

function isUppercase(character) {
    var isUpper = true;
    if (character == character.toLowerCase()) {
        isUpper = false;
    }
    return isUpper;
}
const lowercaseOffset = -96;
const uppercaseOffset = -64 + 26;

function getPrio(supplies) {
    var priority = 0;
    if (isUppercase(supplies)) {
        priority = supplies.charCodeAt(0) + uppercaseOffset;
    } else {
        priority = supplies.charCodeAt(0) + lowercaseOffset;
    }
    return priority;
}
var total = 0;

compartments.forEach(compartmentPair => {
    var suppliesA = compartmentPair[0].split('')
    var suppliesB = compartmentPair[1].split('')
    var suppliesAHash = {};
    var suppliesBHash = {};

    suppliesA.forEach(supply => {
        suppliesAHash[supply] = true;
    });
    suppliesB.forEach(supply => {
        suppliesBHash[supply] = true;
    })
    for (const property in suppliesAHash) {
        if (suppliesBHash[property]) {
            total += getPrio(property)
        }
    }

});


console.log(total)

var elfTeams = [];
for (var i = 0; i < rucksacks.length; i += 3) {
    elfTeams.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]])
}

console.log(elfTeams)

total = 0;

elfTeams.forEach(team => {
    var suppliesHashA = {};
    var suppliesHashB = {};
    var suppliesHashC = {};
    var suppliesA = team[0].split('')
    var suppliesB = team[1].split('')
    var suppliesC = team[2].split('')
    suppliesA.forEach(supply => {
        suppliesHashA[supply] = true;
    });
    suppliesB.forEach(supply => {
        suppliesHashB[supply] = true;
    });
    suppliesC.forEach(supply => {
        suppliesHashC[supply] = true;
    });
    var supplyStock = {};
    for (supply in suppliesHashA) {
        if (supplyStock[supply]) {
            supplyStock[supply] += 1;
        } else {
            supplyStock[supply] = 1;
        }
    }
    for (supply in suppliesHashB) {
        if (supplyStock[supply]) {
            supplyStock[supply] += 1;
        } else {
            supplyStock[supply] = 1;
        }
    }
    for (supply in suppliesHashC) {
        if (supplyStock[supply]) {
            supplyStock[supply] += 1;
        } else {
            supplyStock[supply] = 1;
        }
    }
    for (stock in supplyStock) {
        if (supplyStock[stock] == 3) {
            total += getPrio(stock)
        }

    }
}
);

console.log(total)


