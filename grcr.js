const prompt = require('prompt-sync')();
const fs = require('fs');
let items=[];


function additem(){
    let name=prompt('Enter the name of the item: ');
    let price=parseFloat(prompt('Enter price: '));
    if (items.find(item => item.name === name)){
        console.log(name+' '+"already exists in the list😶")
    }
    else{
        items.push({ "name": name, "price": price });
        console.log(name +' '+ 'is added to the list👍');
    }

}
function removeitem() {
    
    const name = prompt('Enter the name of the grocery item to remove: ');
    if(items.find(item => item.name === name)){
        items = items.filter(item => item.name !== name);
        console.log(name +' '+ 'is removed from the list👍');
    }
    else{
        console.log(name +' '+ 'does not exist in the list😶');
    }


}
function displayitems() {
    if (items.length === 0) {
        console.log('Your grocery list is empty🤷.');
    } else {
        console.log('⭐Your grocery list⭐');
        items.forEach(item => console.log(item.name+':'+'$'+item.price));
    }
}

function calculate(){
    let totalcost = 0;
    for (let i = 0; i < items.length; i++) {
        totalcost+= items[i].price;
    }
    console.log('Total cost💲: $' + totalcost);
}
function save(){
    const filename=prompt('Enter name of file u want to save the grocery list in it📁: ')
    fs.writeFileSync(filename+'.json', JSON.stringify(items));
    console.log('Grocery list saved to'+' '+ filename+'.json✅.');
}
function load(){
    const filename=prompt('Enter name of file u want to load📁: ')
    if (fs.existsSync( filename+'.json')) {
       items = JSON.parse(fs.readFileSync(filename+'.json', 'utf8'));
        console.log('Grocery list loaded from'+' '+ filename+'.json✅');
    } else {
        console.log('No saved grocery list found🤷.');
    }

}

while (true){
    console.log('✨Grocery System✨')
    console.log('1.add grocery')
    console.log('2.remove grocery')
    console.log('3.display grocery list')
    console.log('4.Total cost')
    console.log('5.save grocery list')
    console.log('6.load grocery list')
    console.log('7.Exit')
    let choice=parseInt(prompt('enter a number from(1-6): '))
    if (choice===1){
       additem()
    }
    else if(choice===2){
       removeitem()
    }
    else if(choice===3){
       displayitems()
    }
    else if(choice===4){
       calculate()
    }
    else if(choice===5){
        save()
    }
    else if(choice===6){
        load()
    }
    else if(choice===7){
        console.log('Bye😊')
        break
    }
    else{
        console.log('Invalid Choice')
    }


}