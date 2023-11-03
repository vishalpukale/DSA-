let n = 5;

let stars = n;
let spaces = 0;

for (let i = 1; i <= n; i++){
    let s = "";

    // first half spaces
    for(let j = 1; j <= spaces/2; j++){
        s += " ";
    }
    //all the stars
    for(let j = 1; j <= stars; j++){
        s += "*";
    }
    
    //second half spaces Thers no need to print right side of the spaces
    console.log(s);

    if(i<=n/2){
        stars-=2;
        spaces+=2
    }
    else{
        stars+=2;
        spaces-=2
    }
}