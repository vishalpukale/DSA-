var array = [10, 20, 30, 40, 50, 60, 70];
function swap(array, source, destn) {
    var temp = array[destn];
    array[destn] = array[source];
    array[source] = temp;
}
function revArray(array) {
    var n = array.length;
    var source = 0;
    var destn = n - 1;
    while (source < destn) {
        swap(array, source, destn);
        source++;
        destn--;
    }
    return array;
}
console.log(revArray(array));
