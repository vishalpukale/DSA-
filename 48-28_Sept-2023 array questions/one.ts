//Write a Program to find two array elements in an array that add up to a number

let arr = [5, 6, 7, 8, 9, 10];

function findNums(arr, target){

    const pair : number[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target){
                pair.push(arr[i]);
                pair.push(arr[j]);
            }
        }
    }
    return pair;
}


console.log(findNums(arr, 19));