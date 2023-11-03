//This Problem can alse be treated as print the Denominations

function climbLadder(i: number, psf: string, n: number){

    if(i == n){ 
        console.log(psf);
        return;
    }
    if(i>n) return;

    //Options
    climbLadder(i+1, psf+"1 ", n);
    climbLadder(i+2, psf+"2 ", n);
    climbLadder(i+3, psf+"3 ", n);
}


climbLadder(0, "", 4);