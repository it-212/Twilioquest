const argument = process.argv[2];
const number = Number(argument);

if(number === 0){
    console.log("alive");
}
else if(number >= 1){
    console.log("other");
}
