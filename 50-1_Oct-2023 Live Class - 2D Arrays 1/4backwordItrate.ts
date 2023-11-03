let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function backwardItrate(arr : number[][]){

    for(let j = 0; j < arr[0].length; j++){
        for(let i = arr.length - 1; i >= 0; i--){
            console.log(arr[i][j]);
        }  
    }
}

backwardItrate(arr);
