const arg = process.argv[2];

const number = Number(arg);

if(number % 3 === 0 && number % 5 === 0){
    console.log("JavaScript");
}
else if(number % 3 === 0){
    console.log("Java");
}
else if(number % 5 === 0){
    console.log("Script");
}
else{
    console.log(number);
}
