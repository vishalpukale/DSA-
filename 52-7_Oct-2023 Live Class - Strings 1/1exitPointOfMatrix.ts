const arr = [
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0]
]

function exitPointOfMatrix(arr: number[][]): void{

    let i = 0; 
    let j = 0;

    let dir = "R";

    let n = arr.length;
    let m = arr[0].length;

    while(i>=0 && i<n && j>=0 && j<m ){ //until i am inside the matrix

        if(arr[i][j] == 1){
            //Change direction
            if(dir == "R") dir = "D";
            else if(dir == "D") dir = "L";
            else if(dir == "L") dir = "U";
            else if(dir == "U") dir = "R"

            arr[i][j] = 0;
        }

        //Move Forward
        if(dir == "R") j++;
        else if(dir == "D") i++;
        else if(dir == "L") j--;
        else if(dir == "U") i--;
    }

    //ON this line of code
    //we will be standing outside of the matrix 
    //So we have to move one step backwards

    //move backwards
    if(dir == "R") j--;
    else if(dir == "D") i--;
    else if(dir == "L") j++;        
    else if(dir == "U") i++;

    console.log(i, j);
}
 

exitPointOfMatrix(arr);