var arr = [3, 1, 2, 4, 5];
function containerWithMostWater(arr) {
    var l = 0;
    var r = arr.length - 1;
    var maxi = 0;
    while (l < r) {
        var height = Math.min(arr[l], arr[r]);
        var width = r - l;
        var total = height * width;
        maxi = Math.max(maxi, total);
        if (arr[l] < arr[r])
            l++;
        else
            r--;
    }
    return maxi;
}
console.log(containerWithMostWater(arr));
