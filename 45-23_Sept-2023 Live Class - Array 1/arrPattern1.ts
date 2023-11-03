const arr : number[] = [4, 7, 6, 2, 4, 3, 5];

let n = arr.length;
function maxEle(arr) : number {

    // We have to find the height of the pattern
    // finding max value in array

    let maxi = -Infinity;
    for(let i = 0; i < n; i++) {

        if(arr[i]>=maxi) {
            maxi = arr[i];
        }
    }
    // So now we know the height of the pattern
    return maxi;
}
console.log(maxEle(arr));

function barChartPrint(arr){

    let maxi = maxEle(arr);
    // Now print the bar chart
    
    for(let i = maxi; i>0; i--){

        let s = "";

        for(let j = 0; j < n; j++){
            if(arr[j]>=i) s += "*";
            else s += " ";
        }
        console.log(s);
    }
}


barChartPrint(arr); 