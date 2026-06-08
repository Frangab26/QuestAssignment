const prompt = require("prompt-sync")();

let loot = [];

let itemName = "";

while (itemName.toLowerCase()!=="done"){

    itemName = prompt("Enter a loot item (or done):");
    
if (itemName.toLowerCase()!== "done") {

let itemValue = Number( prompt("Enter the value of" + itemName + ":")
);

loot.push({

    name:itemName,
    value:itemValue
});


}

}


console.log(loot);

console.log("loot Collected:");
for(let i = 0; i < loot.length; i++){

    console.log (
        "[" + ( i + 1) +"]" +
        loot [i].name + "-" +
        loot [i].value
    );
}

let totalValue = 0;

for (let i = 0; i < loot. length; i++) {

    totalValue += loot[i].value;
   
}
 console.log("Total Loot Value: " + totalValue);

 /*
 Reflection:
Question 1: How are loot objects structured?
 The loot items are stored as array objects, each containing the name and value commands.

 Question 2: The value result is created by the loop when inputting the "let itemValue" and "const: name/value" commands. 
 the const contains the number value that will cause the result. 