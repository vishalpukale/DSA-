var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
function sumArray(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        var k = arr1[i] + arr2[i];
        arr3[i] = k;
    }
    return arr3;
}
console.log(sumArray(arr1, arr2));
