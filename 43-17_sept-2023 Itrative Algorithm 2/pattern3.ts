let n = 5;

for(let i = 1; i <= n; i++){

    let s: string = "";
    let stars = i;
    let spaces = n - stars;

    for(let j=1; j<=spaces; j++){
        s += " ";
    }
    for(let j=1; j<=stars; j++){
        s += "*";
    }
    console.log(s);
}