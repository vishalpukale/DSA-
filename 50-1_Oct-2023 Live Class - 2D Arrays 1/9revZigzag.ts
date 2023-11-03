let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function revZigZag(arr: number[][]) : number[][] {

    for(let i = arr.length - 1; i >= 0; i--) {
        if(i%2 == 0) {
            for(let j = 0; j < arr.length; j++) {
                console.log(arr[i][j]);
            }
        }
        else{
            for(let j = arr[i].length - 1; j >= 0; j--){
                console.log(arr[i][j]);
            }
        }
    }
    return arr;
}


revZigZag(arr);