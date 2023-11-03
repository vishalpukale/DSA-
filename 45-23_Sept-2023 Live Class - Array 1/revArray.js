var array = [10, 20, 30, 40, 50, 60, 70];
function revArray(array) {
    var reverseArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        var value = array[i];
        reverseArray.push(value);
    }
    console.log(reverseArray);
}
revArray(array);
