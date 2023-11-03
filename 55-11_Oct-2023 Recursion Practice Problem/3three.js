function countDigits(num) {
    var count = 0;
    if (num > 0) {
        count++;
        countDigits(num / 10);
    }
    else
        return num;
}
console.log(countDigits(20));
