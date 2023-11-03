//Write a Program to find the median of two sorted arrays of the same size.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function median(arr1, arr2) {

    let arr : number[]= arr1.concat(arr2);

    let l = 0;
    let r = arr.length-1;

    let mid = Math.floor((l+r) / 2);

    let median = (arr[mid]+arr[mid+1])/2;

    console.log(median);
}

median(arr1, arr2);


