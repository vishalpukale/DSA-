var arr1 = [2, 3, 4];
var arr2 = [1, 2, 3];
function diffArray(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        var k = arr1[i] - arr2[i];
        arr3[i] = k;
    }
    return arr3;
}
console.log(diffArray(arr1, arr2));
