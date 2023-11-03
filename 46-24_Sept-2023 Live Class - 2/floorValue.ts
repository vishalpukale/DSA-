const arr : number[] = [2, 8, 11, 15, 22, 32, 47, 49, 51, 66, 72];

function getFloor(arr, target){

    let l = 0;
    let r = arr.length-1;
    let floor = -1;

    while(l <= r){

        let mid = Math.floor((l + r) / 2);

        if(arr[mid] === target){
            return floor;
        }
        else if(arr[mid] <= target){
            floor = arr[mid];
            l = mid + 1;
        }
        else if(arr[mid] > target){
            r = mid - 1;
        }
    }
    return floor;
}

console.log(getFloor(arr, 67));