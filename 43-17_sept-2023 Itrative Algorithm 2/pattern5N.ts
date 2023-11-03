let n = 5;

let stars = 1;
let spaces = Math.floor(n/2);

for(let i = 1; i<=n; i++) {

    let s = "";

    for(let j = 1; j <= spaces/2; j++) {
        s += " ";
    }
    for(let j = 1; j <= stars; j++) {
        s += "*";
    }

    console.log(s);

    if(i <= n/2){
        stars += 2;
        spaces -= 1;
    }
    else{
        stars -= 2;
        spaces += 1;
    }
}
