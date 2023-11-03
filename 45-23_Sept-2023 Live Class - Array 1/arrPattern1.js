var arr = [4, 7, 6, 2, 4, 3, 5];
var n = arr.length;
function maxEle(arr) {
    // We have to find the height of the pattern
    // finding max value in array
    var maxi = -Infinity;
    for (var i = 0; i < n; i++) {
        if (arr[i] >= maxi) {
            maxi = arr[i];
        }
    }
    // So now we know the height of the pattern
    return maxi;
}
console.log(maxEle(arr));
function barChartPrint(arr) {
    var maxi = maxEle(arr);
    // Now print the bar chart
    for (var i = maxi; i > 0; i--) {
        var s = "";
        for (var j = 0; j < n; j++) {
            if (arr[j] >= i)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChartPrint(arr);
