var searchRange = function(arr, target) {
    
    let first = findFirst(arr, target);
    let second = findSec(arr, target);
    return [first, second];
};

function findFirst(arr, target){
    
    let i = 0;
    let j = arr.length - 1;
    let ans = -1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);

        if(arr[mid] == target){
            ans = mid;
            j = mid-1;
        }
        else if(arr[mid] < target){
            i = mid + 1; 
        }
        else{
            r = mid - 1;
        }
    }
    return ans;
}

function findSec(arr, target){
    
    let i = 0;
    let j = arr.length - 1;
    let ans = -1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);

        if(arr[mid] == target){
            ans = mid;
            i = mid+1;
        }
        else if(arr[mid] < target){
            i = mid + 1; 
        }
        else{
            r = mid - 1;
        }
    }
    return ans;
}