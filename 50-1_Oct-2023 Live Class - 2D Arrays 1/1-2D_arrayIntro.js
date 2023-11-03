var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
function itration1(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}
itration1(array);
function itration2(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = array[i].length - 1; j >= 0; j--) {
            console.log(array[i][j]);
        }
    }
}
itration2(array);
// console.log(array[1][1]);
// console.log(array.length); // rows
// console.log(array[0].length); // columns
