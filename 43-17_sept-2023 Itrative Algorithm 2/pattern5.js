var n = 7;
var stars = 1;
var spaces = n - stars;
for (var i = 1; i <= n; i++) {
    var s = "";
    for (var j = 1; j <= spaces / 2; j++) {
        s += " ";
    }
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    console.log(s);
    if (i <= n / 2) {
        spaces -= 2;
        stars += 2;
    }
    else {
        spaces += 2;
        stars -= 2;
    }
}
