var arr = [1, 2, 3, 7, 5];
function subArraySum(arr, n, target) {
    var start = 0;
    var end = 0;
    var sum = arr[0];
    while (end < arr.length) {
        if (sum === target) {
            return [start, end];
        }
        else if (sum < target) {
            end++;
            if (end < arr.length) {
                sum += arr[end];
            }
        }
        else {
            sum -= arr[start];
            start++;
        }
    }
    return;
}
console.log(subArraySum(arr, 5, 5));
