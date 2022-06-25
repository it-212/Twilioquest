function calculateMass(stringArray){
    let result = stringArray.reduce((sum, current) => sum + current.length, 0);
    return result;
}