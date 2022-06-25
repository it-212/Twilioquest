function addFirstToLast(stringArray){
    let firstAndLast = "";  
    l = stringArray.length;

    if( l > 0){
        firstAndLast = stringArray[0] + stringArray[l-1];
    }

    return firstAndLast;

}