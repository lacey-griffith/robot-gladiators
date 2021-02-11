// Game states
// "WIN" - player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - player robot's health is zero or less



// shows user and starting attack and health
//sconsole.log(playerInfo.name, playerInfo.attack, playerInfo.health);


var fight = function(enemy) {
    while (enemy.health > 0 && playerInfo.health > 0) {
        //ask player to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player skips, confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to quit
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true) leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from player for skipping fight
                playerInfo.money = Math.max(0, playerInfo.money - 10);

                break;
            }
        }

        //remove enemy's health by subratcting the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " +
            enemy.name + ". " +
            enemy.name + " now has " + enemy.health + " health remaining.");

        // check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;
            console.log("playerInfo.money", playerInfo.money);

            //leave loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " +
                enemy.health + " health left.");
        }

        //remove player health by subracting the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " +
            playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            //leave loop since player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");

        }
    }
};

var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        //if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            //let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //pick new enemy to fight based off the index of enemy.names
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy health each time new robot enters the fight
            pickedEnemyObj.health = randomNumber(40,60);

            //pass the pickedenemy.name variable's value into the fight function where it
            //will assume the vlaue of the enemy.name parameter
            fight(pickedEnemyObj);
            //if we're not at the end of the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes, take to store function
                if (storeConfirm) {
                shop();
            }
        }

        } else {
            window.alert("You have lost your robot in battle! Game Over!");
        }
    }
    endGame();
};
var endGame = function() {
    //if player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": //new case
            case "refill":
                if (playerInfo.money >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");

                    //increase health and decrease money
                    playerInfo.health = playerInfo.health +20;
                    playerInfo.money = playerInfo.money -7;
                
                } else {
                    window.alert("You don't have enough money!");
                }
                break;
                
            case "UPGRADE": //new case    
            case "upgrade":
                if (playerInfo.money >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");

                    //increase attack and decrease money
                    playerInfo.attack = playerInfo.attack + 6;
                    playerInfo.money = playerInfo.money -7;

                } else {
                    window.alert("You don't have enough money!");
                }
                break;
            
            case "LEAVE": //new case
            case "leave":
                window.alert("Leaving the store.");
                break;
            
            default:
                window.alert("You did not pick a valid option. Try Again.");
                //call shop function again to force player to choose a valid option
                shop();
                break;
        }

};
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max-min + 1) + min);
    return value;
};

//Player stats
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars");
            this.health += 20;
            this.money -= 7;
        }
        else { 
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
//enemy stats
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber (10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber (10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10,14)
    }
];
//start the game when the page loads
startGame()


//PLAY AGAIN FEATURE
// create definitive start to game and end to game
// give ending stats to player 


//SHOP FEATURE
//* ask player if they want to shop
// give stats to player (i.e how much playerInfo.money they have to spend and how much their playerInfo.health is)
// price out items in the shop for player to see
// give options to buy health, buy attack or skip shopping