var arr = [2, 8, 11, 15, 22, 32, 47, 49, 51, 66, 72];
function getFloor(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var floor = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            return floor;
        }
        else if (arr[mid] <= target) {
            floor = arr[mid];
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return floor;
}
console.log(getFloor(arr, 67));
