//Write a Program to find the median of two sorted arrays of the same size.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
function median(arr1, arr2) {
    var arr = arr1.concat(arr2);
    var l = 0;
    var r = arr.length - 1;
    var mid = Math.floor((l + r) / 2);
    var median = (arr[mid] + arr[mid + 1]) / 2;
    console.log(median);
}
median(arr1, arr2);
