var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function rotate90(arr) {
    var n = arr.length;
    //Step 1: Convert matrix to Transpose Matrix
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            var temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    // Step 2 : Reverse all rows
    for (var i = 0; i < n; i++) {
        reverse(arr[i]);
    }
}
rotate90(arr);
console.log(arr);
