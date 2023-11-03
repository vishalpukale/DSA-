function countWaysToClimbStairs(i, n) {
    if (i == n)
        return 1;
    if (i > n)
        return 0;
    var OneJump = countWaysToClimbStairs(i + 1, n);
    var TwoJump = countWaysToClimbStairs(i + 2, n);
    var ThreeJump = countWaysToClimbStairs(i + 3, n);
    return OneJump + TwoJump + ThreeJump;
}
console.log(countWaysToClimbStairs(0, 4));
