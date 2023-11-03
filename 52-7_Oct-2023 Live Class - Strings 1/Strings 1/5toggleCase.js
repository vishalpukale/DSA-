var s = "AaBbCcDefg";
function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var ascaii = s.charCodeAt(i); // Here i am getting the ascaii code
        if (ascaii >= 97) {
            ascaii -= 32;
        }
        else {
            ascaii += 32;
        }
        ans += String.fromCharCode(ascaii); //I am generating a char associated with new ascaii value
    }
    return ans;
}
console.log(toggleCase(s));
