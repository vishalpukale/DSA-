var s = "acdebaA";
function diffOfTwoChar(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length; j++) {
            var ascaii2 = s.charCodeAt(j);
            var ascaii1 = s.charCodeAt(i);
            ans += s[i] + (ascaii2 - ascaii1);
            i++;
        }
    }
    return ans;
}
console.log(diffOfTwoChar(s));
