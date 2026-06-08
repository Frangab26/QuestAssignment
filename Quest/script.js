const loot = []; 

const lootName = document.getElementById("lootName");

const lootValue = document.getElementById("lootValue");

const addLoot = document.getElementById("addLoot");

const lootList = document.getElementById("lootList");

const totalValue = document.getElementById("totalValue");

const message = document.getElementById("message");

addLoot.addEventListener ("click", function () {

    const name = lootName.value.trim ();
    const value = Number (lootValue.value);

    if (name ==="") {
        message.textContent = "please enter loot name";
        return;
    }

    if (isNaN(value) || value <0 ) {
        message.textContent = "Please enter a valid loot value.";
        return;
    }

    const lootItem = {
        name:name,
        value: value
    };

    loot.push (lootItem);
    
    let output = "";
    let total = 0;

    for (let i =0; i < loot.length; i++) {
        output += loot [i].name + " - $" + loot [i].value + "<br>";
        total += loot [i].value;
    }

    lootList.innerHTML = output;
    totalValue.textContent = "$" + total;

    lootName.value = "";
    lootValue.value = "";
}); 


  

/* Debugging Reflection

i noticed that the loot array changed after the game operation completed. the loot tracker doesn't show up until the end of the game. the UI updates at the end of the loop. */
