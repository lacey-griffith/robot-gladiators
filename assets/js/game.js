
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack =10;
var playerMoney =10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
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
fight();