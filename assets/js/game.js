// Game states
// "WIN" - player robot has defeated all enemy robots
// * Fight all enemy robots
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


var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
//ask player to fight or skip
var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player skips, confirm and stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to quit
    var confirmSkip = window.confirm("Are you sure you want to quit?");
    
    // if yes (true) leave fight
    if (confirmSkip) {
    window.alert( playerName + " has decided to skip this fight. Goodbye!");
    //subtract money from player for skipping fight
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
    }
}

//remove enemy's health by subratcting the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " 
    + enemyName + ". " + 
    enemyName + " now has " + enemyHealth + " health remaining.");
    
    // check enemy health
    if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
    
    //award player money for winning
    playerMoney = playerMoney +20;
    console.log ("playerMoney",playerMoney);

    //leave loop since enemy is dead
    break;
}
    else {
        window.alert(enemyName + " still has " 
        + enemyHealth + " health left.");
}

//remove player health by subracting the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log (
    enemyName + " attacked " + playerName + ". " + 
    playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
    //leave loop since player is dead
    break;
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
};

for(var i=0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
};