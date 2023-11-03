let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function reverse(arr){
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
}



function rotate90(arr : number[][]){

    let n = arr.length;
    //Step 1: Convert matrix to Transpose Matrix
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // Step 2 : Reverse all rows

    for(let i = 0; i < n; i++){
        reverse(arr[i])
    }
    
}


rotate90(arr);

console.log(arr);