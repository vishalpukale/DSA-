var s = "aaabbccccddefffffgh";
function compressString(s) {
    var i = 0;
    var ans = "";
    while (i < s.length) {
        var j = i;
        while (j < s.length && s[i] == s[j])
            j++;
        ans += s[i];
        if (j - i > 1)
            ans += (j - i);
        i = j;
    }
    return ans;
}
console.log(compressString(s));
