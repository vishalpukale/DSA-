let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function revZigZag(arr: number[][]) {

    for(let i = arr.length - 1; i >= 0; i--){
        for(let j = arr[i].length - 1; j>=0 ; j--){
            console.log(arr[i][j]);
        }
    }
}


revZigZag(arr);