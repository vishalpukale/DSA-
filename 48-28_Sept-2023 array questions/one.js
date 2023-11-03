//Write a Program to find two array elements in an array that add up to a number
var arr = [5, 6, 7, 8, 9, 10];
function findNums(arr, target) {
    var pair = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                pair.push(arr[i]);
                pair.push(arr[j]);
            }
        }
    }
    return pair;
}
console.log(findNums(arr, 19));
