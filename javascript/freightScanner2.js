function scan(stringArray){
    let counter = [];
    for(let i=0; i < stringArray.length; i++){
        if(stringArray[i]=="contraband"){
            counter.push(i);
        }
    }
    return counter;

}

const array = ["contraband", "contraband2"];
console.log(scan(array));