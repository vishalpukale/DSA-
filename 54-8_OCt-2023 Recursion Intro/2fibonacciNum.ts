function fibonacci(n: number):number{

    if(n == 1) return 0;
    if(n == 2) return 1;

    let fibo1 = fibonacci(n-1);
    let fibo2 = fibonacci(n-2);
    
    let fiboofN = fibo1 + fibo2;

    return fiboofN;
}   

console.log(fibonacci(8))