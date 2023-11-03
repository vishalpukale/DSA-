var A = [2, 10, 12, 43, 0, 4, 9];
function linearSearch(A, target) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] === target) {
            return i;
        }
    }
}
console.log(linearSearch(A, 0));
