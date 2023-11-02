function playcraps() {
    /* Marco Cespedes 
    mcespedes81068@uat.edu.com
    10/22/23
    this is a function to play Craps in game.html
    Craps rules: 
    sum or 7 or 11 = a loss
    Even doubles = a win 
    Anything else = a push 
    */

   // Function to determine Die 1
    console.log("playcraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1res").innerHTML = "Result: " + die1;

   // Function to determine Die 2
    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2res").innerHTML = "Result: " + die2;

   // Function to determine Sum of Dice
    var sum = die1 + die2;
    console.log("Dice sum = " + sum);
    document.getElementById("Sumres").innerHTML = "Result: " + sum;

    //Check for 7 or 11 meaming loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameres").innerHTML = "You Lost, pay the barkeep!";
    }
    // Check for even doubles to win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameres").innerHTML = " You won your Ale! Try for another?";
    }
    // Not a loss or win
    else {
        document.getElementById("gameres").innerHTML = "Did you win? No, try again!";
    }

}