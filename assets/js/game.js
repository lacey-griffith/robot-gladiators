// Game states
// "WIN" - player robot has defeated all enemy robots
//  * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack =10;
var playerMoney =10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// shows user and starting attack and health
console.log(playerName, playerAttack, playerHealth);

// shows enemyName, number in index and "enemyName is at index X"
//console.log(enemyNames);
//console.log(enemyNames.length);
for(var i=0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index.");
}


//console.log(enemyNames[enemyNames.length-1]);

var fight = function(enemyName) {
// Alerting players they are starting the round
window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
//remove enemy's health by subratcting the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//remove player health by subracting the enemyAttack variable
playerHealth = playerHealth - enemyAttack;

console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
//if player skips
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to quit
    var confirmSkip = window.confirm("Are you sure you want to quit?")
// if yes (true) leave fight
if (confirmSkip) {
    window.alert( playerName + " has decided to skip this fight. Goodbye!");
    playerMoney = playerMoney - 2;
}
// if no (false) ask question again by running fight() again
else {
    fight();
}
} else {
    window.alert("You need to choose a valid option. Try again!");
}



};
for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}