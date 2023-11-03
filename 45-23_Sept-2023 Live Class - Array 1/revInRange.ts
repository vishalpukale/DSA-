let array = [10, 20, 30, 40, 50, 60, 70, 80];

function swap(array, l, r) {
    let temp = array[l];
    array[l] = array[r];
    array[r] = temp;
}
function reverseInRange(array, l, r) {

    while(l<r){
        swap(array, l, r);
        l++;
        r--;
    }
}

reverseInRange(array, 1, 4);

console.log(array);