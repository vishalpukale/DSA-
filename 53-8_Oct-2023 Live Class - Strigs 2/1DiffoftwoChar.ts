let s = "acdebaA";

function diffOfTwoChar(s: string){

    let ans = "";

    for(let i = 0; i < s.length; i++){
        
        for(let j = i+1; j < s.length; j++){
            let ascaii2 = s.charCodeAt(j);
            let ascaii1 = s.charCodeAt(i);
            ans += s[i]+(ascaii2-ascaii1);
            i++;
        }
    }
    return ans;
}

console.log(diffOfTwoChar(s));