let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function readArray(a){

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            console.log(a[i][j]);
        }
    }
}

readArray(a);