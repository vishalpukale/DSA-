var n = 5;
var stars = n;
var spaces = 0;
for (var i = 1; i <= n; i++) {
    var s = "";
    // first half spaces
    for (var j = 1; j <= spaces / 2; j++) {
        s += " ";
    }
    //all the stars
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    //second half spaces Thers no need to print right side of the spaces
    console.log(s);
    if (i <= n / 2) {
        stars -= 2;
        spaces += 2;
    }
    else {
        stars += 2;
        spaces -= 2;
    }
}
