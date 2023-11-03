let arr = [1,2,3,7,5];


function subArraySum(arr : number[], n: number, target: number){

    let start = 0;
    let end = 0;
    let sum = arr[0];

    while(end<arr.length){
        if(sum === target){
            return [start, end];
        }
        else if(sum < target){
            end++;
            if(end < arr.length){
                sum += arr[end];
            }
        }
        else{
            sum -= arr[start];
            start++;
        }
    }
    return ;
}


console.log(subArraySum(arr, 5, 5));
