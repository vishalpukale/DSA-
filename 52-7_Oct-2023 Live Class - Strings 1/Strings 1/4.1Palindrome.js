var s = "naman";
function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("naman"));
function printPalindromicSubstring(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            var subString = s.substring(i, j + 1);
            if (isPalindrome(subString))
                console.log(subString);
        }
    }
}
console.log(printPalindromicSubstring(s));
