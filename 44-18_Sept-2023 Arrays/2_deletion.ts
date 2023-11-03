let A = [0, 12, 24, 32, 36, 47, 48, 52, 64];

function deleteData(A, index){

    for(let i = index; i<A.length; i++){
        A[i] = A[i+1];
    }
}

deleteData(A, 1);

console.log(A);