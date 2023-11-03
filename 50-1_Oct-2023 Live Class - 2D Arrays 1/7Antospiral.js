var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function antiSpiralRotate(arr) {
    var ans = [];
    var n = arr.length;
    var m = arr[0].length;
    var tw = 0;
    var bw = n - 1;
    var lw = 0;
    var rw = m - 1;
    var total = n * m;
    while (total > 0) {
        for (var j = rw; j >= lw && total > 0; j--) {
            ans.push(arr[tw][j]);
            total--;
        }
        tw++;
        for (var i = tw; i <= bw && total > 0; i++) {
            ans.push(arr[i][lw]);
            total--;
        }
        lw++;
        for (var j = lw; j <= rw && total > 0; j++) {
            ans.push(arr[bw][j]);
            total--;
        }
        bw--;
        for (var i = bw; i >= tw && total > 0; i--) {
            ans.push(arr[i][rw]);
            total--;
        }
        tw--;
    }
    return ans;
}
console.log(antiSpiralRotate(arr));
