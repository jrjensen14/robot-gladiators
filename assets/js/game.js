// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =  10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttach = 12;

var fight = function(enemyName) {
    window.alert("the fight has begun");

    var promptFight = window.prompt("would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.")
    
    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of 'player attack' from the value of 'enemyhealth' and use that result to update the value in the 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
            );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
        // Log a resulting message to the console so we know that it worked.

        // Subtract the value of 'enemyAttack' from the value of 'playerHEalth and ust that reult to update teh value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttach;
            console.log(
              enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
         );
        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

        // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has choosen to skip the fight. Goodbye!"); 
            playerMoney = playerMoney - 2; 
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }


    // Log a resulting messge to teh console so we know that it worked.
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//fight();

//} else {
   // window.alert("you need to choose a valid option. Try again!");