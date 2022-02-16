// Ganes States
// "WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemby-robots
//  * Defeat each enemy-robot 
// "LOSE" - Player robot's health is zero or less 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

        // if player chooses to skip 
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wnats to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight 
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney" , playerMoney);
            break;
        }
    }    
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead 
        break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
      }
  }
}
// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
    // reset player stats 
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keeep fighting
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName =  enemyNames[i];

        // reset enemyHealth before starting new fight 
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName paramteter
        fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    } endGame();
  } 
};
// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins! 
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start the game when the page loads 
startGame();