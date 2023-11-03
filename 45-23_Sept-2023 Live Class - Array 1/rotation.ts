let array = [1, 2, 3, 4, 5];

function swap(array, l, r){

    let temp = array[r];
    array[r] = array[l];
    array[l] = temp;
}


function reverseArray(array, l, r){
    while(l < r){
        swap(array, l, r);
        l++;
        r--;
    }
}


function rotateArray(array, k){
    let n = array.length;
    k = k%n;

    reverseArray(array, n-k, n-1);
    reverseArray(array, 0, n-k-1);
    reverseArray(array, 0, n-1);
}


rotateArray(array, 6);

console.log(array);