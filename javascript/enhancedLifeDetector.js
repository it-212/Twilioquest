const argument = process.argv[2];
const number = Number(argument);

if(number === 0){
    console.log("alive");
}
else if(number === 1){
    console.log("flowering");
}
else if(number === 2){
    console.log("shedding");
}
else if(number >= 3){
    console.log("other");
}
