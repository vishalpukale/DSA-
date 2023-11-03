const array = [10, 20, 30, 40, 50, 60, 70];


function revArray(array){
    let reverseArray = [];

    for(let i = array.length - 1; i >= 0; i--){
        let value = array[i];
        reverseArray.push(value);
    }
    console.log(reverseArray);
}

revArray(array);