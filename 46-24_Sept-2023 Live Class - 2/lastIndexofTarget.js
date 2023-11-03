var arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8];
function firstIndex(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            ans = mid;
            l = mid + 1;
        }
        else if (arr[mid] <= target) {
            l = mid + 1;
        }
        else if (arr[mid] >= target) {
            r = mid - 1;
        }
    }
    return ans;
}
console.log(firstIndex(arr, 8));
