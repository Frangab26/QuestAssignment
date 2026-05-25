// simpleQuest.js
// Random Quest Generator – Terminal Arena (No Functions + User Input)

const prompt = require("prompt-sync")();

// Arrays


const enemies = [
    "Storm and wind",
    "rain",
   
];

const plantOptions = [ 
    "lily",
    "carrot",
    "tomato",
    "mango tree",
    "basil",
    "bell pepper",
    "corn",
    "apple tree",
    "rose"
];

const rewards = [
    "A beautiful garden"
    "more seeds"
];

// Ask user how many quests to generate

let questTotal = parseInt(prompt("How many quests would you like to generate? "));

// Basic validation

while (isNaN(questTotal) || questTotal <= 0)

{
    questTotal = parseInt(prompt("Please enter a valid positive number: "));
}

// Generate quests

for (let i = 1; i <= questTotal; i++) {  
    const enemyIndex = Math.floor(Math.random() * enemies.length);
    const plantOptions= Math.floor(Math.random() * plantOptions.length);
    const rewardIndex = Math.floor(Math.random() * rewards.length);
}
  
   
    // Optional Elite Quest rule

    if (i % 3 === 0) 
    {
        console.log("Quest #" + i + " – Elite Quest");
    }

    else {
        console.log("Quest #" + i);
    }

    console.log("Your plant is: " + plant);
    console.log("Weather: " + enemy);
    console.log("Reward: " + reward);
    console.log("");