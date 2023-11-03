let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let B = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


function addMetrices(A, B) {

    if(A.length === B.length && A[0].length === B[0].length){

        let C = [];

        for(let i = 0; i < A.length; i++){
            C[i] = [];
            for(let j = 0; j < A.length; j++){
                C[i][j] = A[i][j] + B[i][j];
            }
        }
        return C;
    } 

    throw new Error("Metrices cannnot be added");
}


console.log(addMetrices(A, B));

