
class Inventory{

    constructor(inventoryTable){
        this.inventoryTable = inventoryTable;
    }

envents(){
    document.getElementById('new-appliance').addEventListener('submit', addAppliance(), false);
    document.getElementById('view-table').addEventListener('click', viewTable(), false);
}

tableInventory(){
    inventoryTable = {name:"", amount:"" }
}



addAppliance(){
    alert("holaaaa");
    let addAppliances = document.getElementById('applianceType').value;
    let addAmount = document.getElementById('amount').value;
    let newAppliance = {name:addAppliances, amout:addAmount };
    this.inventoryTable.push(newAppliance);

}
viewTable(){
    alert("holaaaa");
    let allTable = document.getElementById("view-table");
    let pushTable = "";
    

    for(let i = 0; i < tabla.length; i++ ){
        pushTable += "<tr><td>"+ this.inventoryTable[i].name + "</td><td>" + this.inventoryTable[i].amount + "</td></tr>"; 
    }
    allTable.innerHTML = pushTable;
}

}