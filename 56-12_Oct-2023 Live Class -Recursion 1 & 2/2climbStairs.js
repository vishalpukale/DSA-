//This Problem can alse be treated as print the Denominations
function climbLadder(i, psf, n) {
    var count = 0;
    if (i == n) {
        // console.log(psf);
        count++;
        return count;
    }
    if (i > n)
        return;
    //Options
    climbLadder(i + 1, psf + "1 ", n);
    climbLadder(i + 2, psf + "2 ", n);
    climbLadder(i + 3, psf + "3 ", n);
}
console.log(climbLadder(0, "", 4));
