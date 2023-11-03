
let str = "malayalam"

function palindrome(str:string){
    const n = str.length-1;

    const mid = Math.floor(str.length/2);
    for(let i=0; i<mid; i++){
        if(str[i] !== str[n-i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome(str));