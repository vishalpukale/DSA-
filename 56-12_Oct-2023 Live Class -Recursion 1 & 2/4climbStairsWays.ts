function countWaysToClimbStairs(i: number, n: number):number {

    if(i == n) return 1;
    if(i > n) return 0;

    let OneJump = countWaysToClimbStairs(i+1, n);
    let TwoJump = countWaysToClimbStairs(i+2, n);
    let ThreeJump = countWaysToClimbStairs(i+3, n);

    return OneJump+TwoJump+ThreeJump;
}


console.log(countWaysToClimbStairs(0, 4));