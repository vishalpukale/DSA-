const arr : number[] = [2,8,11,15,22,32,47,49,51,66,72];


function binarySearch(arr : number[], target : number) : number {

    let l = 0; 
    let r = arr.length-1;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);

        if(arr[mid] == target) return mid;

        else if(arr[mid] < target) {
            l = mid + 1;
        }

        else if(arr[mid] > target) {
            r = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 15));