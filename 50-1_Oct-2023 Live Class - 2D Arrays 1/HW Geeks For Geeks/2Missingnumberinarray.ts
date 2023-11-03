let arr = [1,2,3,5];

function findMissingElement(arr, N) {
    const totalSum = (N * (N + 1)) / 2; // Sum of 1 to N
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    const missingElement = totalSum - arrSum;
    return missingElement;
}

console.log(findMissingElement(arr, 5))
