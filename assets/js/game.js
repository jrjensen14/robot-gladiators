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
    //repeat and execute as long as the enemy-robot is alive
   while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.")

    if (playerHealth > 0) {
        //Let player know what round they are in, arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators!" + (i + 1));

        //pick new enemy to fight based on the index of the enemy array
        var pickedEnemyName = enemyName[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50

        //use debugger to pause scritpt from running and check what whats going on with the code
        debugger;

        //pass teh pickedEnemyName variable's value inot the fight function, where it will assume teh value of the enemyName parameter
        fight(pickedEnemyName);
    } else {
        window.alert("you have lost your robot in battle! Game Over!");
    }

// if player choses to skip
if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("are you sure you'd like to quit?");
  
    // if yes (true), leave the fight
    if (confirmSkip) {
        window.alert(playerName + " has choosen to skip the fight. Goodbye!"); 
        //subtract money from player for skipping       
        playerMoney = playerMoney - 10; 
        console.log("playerMoney", playerMoney);
        break;
      }
    }
     //Subtract the value of 'player attack' from the value of 'enemyhealth' and use that result to update the value in the 'enemyHealth'
     enemyHealth = enemyHealth - playerAttack;
     console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
     );

     if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");

        //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop sinece enemy is dead
        break;
        } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left. ');
}
      // remove players health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttach;
      console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while () loop if player is dead
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left. ');
    }
   }
};
    
        
       
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);}
