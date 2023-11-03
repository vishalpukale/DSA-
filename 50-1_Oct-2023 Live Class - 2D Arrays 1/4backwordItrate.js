var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function backwardItrate(arr) {
    for (var j = 0; j < arr[0].length; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i][j]);
        }
    }
}
backwardItrate(arr);
