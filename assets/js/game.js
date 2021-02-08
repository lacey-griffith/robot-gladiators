
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack =10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerting players they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that
// result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting msg to console to confirm 
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that
// result to update the value in the 'playerHeath' variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting msg to console to confirm
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
// check enemy's health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

};
fight();