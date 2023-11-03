let array = [10, 20, 30, 40, 50, 60, 70];

function swap(array, source, destn){

    let temp = array[destn];
    array[destn] = array[source];
    array[source] = temp;
}


function revArray(array){

    let n = array.length;
    let source = 0;
    let destn = n - 1;

    while(source < destn){
        swap(array, source, destn);
        source++;
        destn--;
    }
    return array;   
}


console.log(revArray(array));