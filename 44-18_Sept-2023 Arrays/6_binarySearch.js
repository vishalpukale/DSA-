var A = [2, 10, 12, 43, 0, 4, 9];
function binarySearch(A, target) {
    var start = 0;
    var end = A.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (A[mid] === target) {
            return mid;
        }
        else if (A[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(A, 4));
