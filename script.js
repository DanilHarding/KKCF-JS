
var noun = " emoji ";
var pasttenseverb = " ran ";
var adjective = " red ";
var number = 6;
var newnumber = number % 4;
var isHappy = true ;

var userName = prompt("Enter your name")


var madlib = "Whether chipping away at a/an" + adjective + "statue or stiching a patchwork" + noun +", " + userName + 
"was always into crafting. But one day, " + userName + " grew tired of working with the" + adjective + "statues, so " + userName + pasttenseverb + " " +  number + " hours away from their workplace. It took them " + newnumber + " more hours to find a place to rest. In the end, they " + (isHappy ? "found happiness again" : "did not find happiness again") //inspiration from: https://assets.readbrightly.com/wp-content/uploads/2020/08/Stay-Home-Theme-Internet-Inspiration.pdf

console.log(madlib)
