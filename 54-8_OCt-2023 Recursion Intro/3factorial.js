function factorial(n) {
    if (n == 1)
        return 1;
    var factnminusone = factorial(n - 1);
    return n * factnminusone;
}
console.log(factorial(0));
