let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

function reverseItration(arr){

    for(let i = arr.length - 1; i >= 0; i--){
        for(let j =arr[i].length - 1; j >= 0; j--){
            console.log(arr[i][j]);
        }
    }
}

reverseItration(arr);