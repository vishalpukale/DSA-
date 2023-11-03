let n = 7; 

let stars = 1;
let spaces = n - stars; 

for(let i = 1; i <= n; i++){
    let s : string = "";

    for(let j = 1; j <= spaces/2; j++){
        s += " ";
    }

    for(let j = 1; j <= stars; j++){
        s += "*";
    }

    console.log(s);

    if(i<=n/2){
        spaces -= 2;
        stars += 2;
    }
    else{
        spaces += 2;
        stars -= 2;
    }
}