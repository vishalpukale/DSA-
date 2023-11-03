function printPaths(i, j, rows, columns, psf) {
    if (i == rows && j == columns) {
        console.log(psf);
        return;
    }
    if (i > rows || j > columns)
        return;
    //If I go Horizontally
    printPaths(i, j + 1, rows, columns, psf + "H");
    //If I go vertically
    printPaths(i + 1, j, rows, columns, psf + "V");
}
printPaths(1, 1, 3, 4, "");
function countPaths(i, j, rows, columns) {
    if (i == rows && j == columns)
        return 1;
    if (i > rows || j > columns)
        return 0;
    //horizontal
    var hori = countPaths(i, j + 1, rows, columns);
    //vertical
    var vertical = countPaths(i + 1, j, rows, columns);
    return hori + vertical;
}
console.log(countPaths(1, 1, 3, 4));
