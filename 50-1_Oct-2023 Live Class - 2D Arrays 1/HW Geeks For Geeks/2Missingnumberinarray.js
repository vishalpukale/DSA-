var arr = [1, 2, 3, 5];
function findMissingElement(arr, N) {
    var totalSum = (N * (N + 1)) / 2; // Sum of 1 to N
    var arrSum = arr.reduce(function (sum, num) { return sum + num; }, 0);
    var missingElement = totalSum - arrSum;
    return missingElement;
}
console.log(findMissingElement(arr, 5));
