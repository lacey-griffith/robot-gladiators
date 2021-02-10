// Game states
// "WIN" - player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 36;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// shows user and starting attack and health
console.log(playerName, playerAttack, playerHealth);


var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        //ask player to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player skips, confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to quit
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true) leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from player for skipping fight
                playerMoney = playerMoney - 10;

                break;
            }
        }

        //remove enemy's health by subratcting the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " +
            enemyName + ". " +
            enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney);

            //leave loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " +
                enemyHealth + " health left.");
        }

        //remove player health by subracting the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " +
            playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave loop since player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");

        }
    }
};

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        //if player is still alive, keep fighting
        if (playerHealth > 0) {
            //let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //pick new enemy to fight based off the index of enemyNames
            var pickedEnemyName = enemyNames[i];

            //reset enemy health each time new robot enters the fight
            enemyHealth = 50;

            //pass the pickedEnemyName variable's value into the fight function where it
            //will assume the vlaue of the enemyName parameter
            fight(pickedEnemyName);

        } else {
            window.alert("You have lost your robot in battle! Game Over!");
        }
    }
    endGame();
};
var endGame = function() {
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    //if player dies
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
//start the game when the page loads
startGame()


//PLAY AGAIN FEATURE
// create definitive start to game and end to game
// give ending stats to player 


//SHOP FEATURE
//* ask player if they want to shop
// give stats to player (i.e how much playerMoney they have to spend and how much their playerHealth is)
// price out items in the shop for player to see
// give options to buy health, buy attack or skip shopping