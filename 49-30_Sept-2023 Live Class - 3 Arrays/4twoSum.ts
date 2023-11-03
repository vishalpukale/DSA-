let arr = [2, 9, 3, 2, 14, 12 ,4];

function approach1(arr : number[], target : number) : number[] {

    arr.sort(function(a,b){return a-b});

    let l = 0;  
    let r = arr.length - 1;

    while(l < r){
        let currentSum = arr[l]+arr[r];
        if(currentSum == target){
            return [arr[l], arr[r]];
        }
        else if(currentSum<target){
            l++;
        }
        else if(currentSum>target){
            r--;
        }
    }
    return [-1];
}

console.log(approach1(arr, 15));
