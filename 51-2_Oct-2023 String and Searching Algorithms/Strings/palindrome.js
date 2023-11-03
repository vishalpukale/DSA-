var str = "malayalam";
function palindrome(str) {
    var n = str.length - 1;
    var mid = Math.floor(str.length / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[n - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome(str));
