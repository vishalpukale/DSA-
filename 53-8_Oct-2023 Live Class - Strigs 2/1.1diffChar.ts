let s = "acdebaA";


function diffOfTwoChars(s: string): string {

    let ans = "";
    for(let i = 0; i < s.length; i++){
        ans += s[i]+(s.charCodeAt(i + 1)-s.charCodeAt(i));
    }
    return ans;
}

console.log(diffOfTwoChars(s));