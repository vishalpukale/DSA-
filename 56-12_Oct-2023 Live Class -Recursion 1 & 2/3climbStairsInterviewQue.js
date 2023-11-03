//If you have unlimited notes of 50, 100 and 200 how many ways do you distribute it to get 300 rs
function climbLadder(startFrom, psf, endTo) {
    if (startFrom == endTo) {
        console.log(psf);
        return;
    }
    if (startFrom > endTo)
        return;
    //options
    climbLadder(startFrom + 50, psf + "50 ", endTo);
    climbLadder(startFrom + 100, psf + "100 ", endTo);
    climbLadder(startFrom + 200, psf + "200 ", endTo);
}
climbLadder(0, "", 300);
