function getFirstAmountSorted(array, num){
    array.sort();
    let sol = [];
    for(let i=0; i < num; i++){
        sol.push(array[i]);
    }
    return sol;
}