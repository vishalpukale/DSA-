let A = [0, 12, 24, 32, 36, 47, 48, 52, 64];

console.log(A);
 
function insertNum(A, index, data){

    let n = A.length - 1;

    while(n > index) {
        A[n] = A[n - 1];
        n--;
    }
    A[n] = data;
    console.log(A);
}

insertNum(A, 1, 5000);  