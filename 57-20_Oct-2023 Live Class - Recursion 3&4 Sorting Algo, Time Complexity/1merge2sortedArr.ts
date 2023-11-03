let arr1 = [5, 10, 15, 16, 30, 44];
let arr2 = [1, 2, 3, 20, 26, 32, 50, 60];


function mergeTwoSortedArray(arr1: number[], arr2: number[]) : number[] {

    let ans: number[] = [];
    let i = 0;
    let j = 0;

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

console.log(mergeTwoSortedArray(arr1, arr2))