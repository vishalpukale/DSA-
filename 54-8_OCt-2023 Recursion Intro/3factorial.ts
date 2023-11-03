function factorial(n: number): number{
    
    if(n == 0) return 1;
    if(n == 1) return 1;
    
    let factnminusone = factorial(n-1);

    return n*factnminusone;
}

console.log(factorial(0));