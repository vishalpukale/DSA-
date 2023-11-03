var S = "naman";
var T = "nnam";
function validateAnagram(S, T) {
    if (S.length != T.length)
        return false;
    var freqS = new Array(26).fill(0);
    var freqT = new Array(26).fill(0);
    for (var i = 0; i < freqS.length; i++) {
        var ascaii = S.charCodeAt(i);
        var index = ascaii - 97;
        freqS[index]++;
    }
    for (var i = 0; i < freqT.length; i++) {
        var ascaii = T.charCodeAt(i);
        var index = ascaii - 97;
        freqT[index]++;
    }
    for (var i = 0; i < 26; i++) {
        if (freqS[i] != freqT[i])
            return false;
    }
    return true;
}
console.log(validateAnagram(S, T));
