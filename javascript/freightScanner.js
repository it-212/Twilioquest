function scanAndFilter(stringArray, string){
    let counter = 0;
    for(let i=0; i < stringArray.length; i++){
        if(stringArray[i]=="contraband"){
            counter += 1;
        }
    }
    return counter;

}

const array = ["contraband", "contraband2"];
console.log(scan(array));