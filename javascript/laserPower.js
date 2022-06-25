function calculatePower(numberArray){
    let newArray = numberArray.map(item => item*2);
    let result = newArray.reduce((sum, current) => sum + current, 0);
    return result;
}