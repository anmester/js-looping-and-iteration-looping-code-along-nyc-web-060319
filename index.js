function writeCards(names, eventName){
    let array = [];
    for(let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return array;
}

function countdown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
} 