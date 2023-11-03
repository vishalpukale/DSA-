let arr1 = [1, 2, 3];

let arr2 = [1, 2, 3];

function sumArray(arr1, arr2) {

    let arr3 : number[]= [];

    for (let i = 0; i < arr1.length; i++) {
        let k = arr1[i] + arr2[i];
        arr3[i] = k;
    }
    return arr3;
}


console.log(sumArray(arr1, arr2));