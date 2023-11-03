var A = [0, 12, 24, 32, 36, 47, 48, 52, 64];
function swapData(A, source, destination) {
    var tempStore = A[destination];
    A[destination] = A[source];
    A[source] = tempStore;
}
swapData(A, 1, 2);
console.log(A);
