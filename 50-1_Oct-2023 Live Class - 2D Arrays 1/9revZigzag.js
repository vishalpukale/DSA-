var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function revZigZag(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            for (var j = 0; j < arr.length; j++) {
                console.log(arr[i][j]);
            }
        }
        else {
            for (var j = arr[i].length - 1; j >= 0; j--) {
                console.log(arr[i][j]);
            }
        }
    }
    return arr;
}
revZigZag(arr);
