var s = "acdebaA";
function diffOfTwoChars(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        ans += s[i] + (s.charCodeAt(i + 1) - s.charCodeAt(i));
    }
    return ans;
}
console.log(diffOfTwoChars(s));
