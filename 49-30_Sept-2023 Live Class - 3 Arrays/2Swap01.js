var arr = [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1];
function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
function swap01(arr) {
    var l = 0; //Exploring
    var r = 0; //stopped constant
    while (l < arr.length) {
        if (arr[l] == 0) {
            swap(arr, l, r);
            l++;
            r++;
        }
        else if (arr[l] == 1) {
            l++;
        }
    }
}
swap01(arr);
console.log(arr);
