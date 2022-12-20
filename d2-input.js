var fs = require('fs');

var input = fs.readFileSync('./d2-input.txt')

var data = input.toString()

var games = data.split('\n')

var splitData = [];
games.forEach(pair => {
    var round = pair.split(" ")
    splitData.push(round)
})


console.log(splitData)



var wins = 0;
var draws = 0;
var losses = 0;
var rocks = 0;
var papers = 0;
var scissors = 0;
var usePoints = 0;
var gamePoints = 0;
const W = 6;
const L = 0;
const D = 3;
const R = 1;
const P = 2;
const S = 3;


for (let index = 0; index < splitData.length; index++) {
    var elfChoice = splitData[index][0];
    var myChoice = splitData[index][1];
    var score = 0;
    if ((elfChoice == 'A' && myChoice == 'Y') || (elfChoice == 'B' && myChoice == 'Z') || (elfChoice == 'C' && myChoice == 'X')) {
        wins++; // Win ruleset
        if (myChoice == 'X') {
            rocks++
        } else if (myChoice == 'Y') {
            papers++
        } else if (myChoice == 'Z') {
            scissors++
        };

    } else if ((elfChoice == 'A' && myChoice == 'Z') || (elfChoice == 'B' && myChoice == 'X') || (elfChoice == 'C' && myChoice == 'Y')) {
        losses++; // Loss ruleset
        if (myChoice == 'X') {
            rocks++
        } else if (myChoice == 'Y') {
            papers++
        } else if (myChoice == 'Z') {
            scissors++
        };--

    } else if ((elfChoice == 'A' && myChoice == 'X') || (elfChoice == 'B' && myChoice == 'Y') || (elfChoice == 'C' && myChoice == 'Z')) {
        draws++; // Draw ruleset
        if (myChoice == 'X') {
            rocks++
        } else if (myChoice == 'Y') {
            papers++
        } else if (myChoice == 'Z') {
            scissors++
        };
    }

}

console.log("I have won " + wins + " games. \n" + "I have lost " + losses +" games. \n" + "I have drawn " + draws + " games")
console.log("I have used " + rocks + " rocks. \n" + "I have used " + papers +" papers. \n" + "I have used " + scissors + " scissors")

var totalScore = (wins + losses + draws)
var totalUses = (rocks + papers + scissors)

if (totalScore == totalUses) {
    console.log ("Equates")
} else {
    console.log ("Failed")
}

gamePoints = ((wins * W) + (losses * L) + (draws * D))
console.log ("My Gamepoints :" + gamePoints)

usePoints = ((rocks * R) + (papers * P) + (scissors * S))
console.log ("My Usepoints :" + usePoints)

var totalPoints = (usePoints + gamePoints)
console.log ("My Totalpoints :" + totalPoints)


