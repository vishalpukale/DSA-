function fibonacci(n) {
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;
    var fibo1 = fibonacci(n - 1);
    var fibo2 = fibonacci(n - 2);
    var fiboofN = fibo1 + fibo2;
    return fiboofN;
}
console.log(fibonacci(8));
