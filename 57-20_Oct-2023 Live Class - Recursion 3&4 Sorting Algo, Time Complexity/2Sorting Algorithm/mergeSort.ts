function merge2SortedArray(arr1: number[], arr2: number[]): number[] {

    let i = 0;
    let j = 0;
    let ans: number[] = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        ans.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}


function mergeSort(arr: number[], upper: number, lower: number): number[]{

    if(lower == upper) return [arr[lower]];

    let mid = Math.floor((upper+lower)/2);
    let left = mergeSort(arr, upper, mid);
    let right = mergeSort(arr, mid+1, lower);

    return merge2SortedArray(left, right);
}

let arr: number[] = [1, 2, 5, 3, 13 , 90, 10, 6];

console.log(mergeSort(arr, 0, arr.length-1));
``