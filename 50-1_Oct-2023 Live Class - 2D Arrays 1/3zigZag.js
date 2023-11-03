var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
function zigZagItration(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < arr[i].length; j++)
                console.log(arr[i][j]);
        }
        else {
            for (var j = arr[i].length - 1; j >= 0; j--)
                console.log(arr[i][j]);
        }
    }
}
;
zigZagItration(arr);
