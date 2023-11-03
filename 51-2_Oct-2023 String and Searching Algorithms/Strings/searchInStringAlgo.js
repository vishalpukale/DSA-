var str = "thermometer";
function searchInString(str, substr) {
    var j = 0;
    for (var i = 0; i < str.length; i++) {
        while (str[i] == substr[j]) {
            i++;
            j++;
            if (j === substr.length) {
                return true;
            }
        }
        i = i - j;
        j = 0;
    }
    return false;
}
console.log(searchInString(str, "meter"));
