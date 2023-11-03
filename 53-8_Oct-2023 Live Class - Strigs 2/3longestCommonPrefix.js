var strs = ["flower", "flow", "flight"];
function longestCommonPrefix(str) {
    var ans = "";
    for (var i = 0; i < str[0].length; i++) {
        for (var j = 1; j < str.length; j++) {
            if (i >= strs[j].length || strs[0][i] != strs[j][i])
                return ans;
        }
        ans += strs[0][i];
    }
    return ans;
}
console.log(longestCommonPrefix(strs));
