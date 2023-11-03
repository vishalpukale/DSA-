function merge2SortedArray(arr1, arr2) {
    var i = 0;
    var j = 0;
    var ans = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
            ans.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}
function mergeSort(arr, upper, lower) {
    if (lower == upper)
        return [arr[lower]];
    var mid = Math.floor((upper + lower) / 2);
    var left = mergeSort(arr, upper, mid);
    var right = mergeSort(arr, mid + 1, lower);
    return merge2SortedArray(left, right);
}
var arr = [1, 2, 5, 3, 13, 90, 10, 6];
console.log(mergeSort(arr, 0, arr.length - 1));
"";
