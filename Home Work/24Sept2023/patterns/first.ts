let n = 5;


for (let i = 1; i <= n; i++){
    let s = "";
    for (let j = 1; j <= i; j++){
        s += " ";
    }
    for (let j = 1; j <= 1; j++){ 
        s += "*";
    }
    console.log(s);
}