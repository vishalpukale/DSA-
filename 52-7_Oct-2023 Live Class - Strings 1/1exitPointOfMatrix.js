var arr = [
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0]
];
function exitPointOfMatrix(arr) {
    var i = 0;
    var j = 0;
    var dir = "R";
    var n = arr.length;
    var m = arr[0].length;
    while (i >= 0 && i < n && j >= 0 && j < m) {
        if (arr[i][j] == 1) {
            if (dir == "R")
                dir = "D";
            else if (dir == "D")
                dir = "L";
            else if (dir == "L")
                dir = "U";
            else if (dir == "U")
                dir = "R";
            arr[i][j] = 0;
        }
        if (dir == "R")
            j++;
        else if (dir == "D")
            i++;
        else if (dir == "L")
            j--;
        else if (dir == "U")
            i--;
    }
    if (dir == "R")
        j--;
    else if (dir == "D")
        i--;
    else if (dir == "L")
        j++;
    else if (dir == "U")
        i++;
    console.log(i, j);
}
exitPointOfMatrix(arr);
