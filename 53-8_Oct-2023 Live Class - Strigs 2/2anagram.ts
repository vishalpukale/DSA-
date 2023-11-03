let S = "naman";
let T = "nnaam";

function validateAnagram(S: string, T: string): boolean {

    if(S.length != T.length) return false;

    let freqS = new Array(26).fill(0);
    let freqT = new Array(26).fill(0);

    for(let i = 0; i < freqS.length; i++) {
        let ascaii = S.charCodeAt(i);
        let index = ascaii - 97;
        freqS[index]++;
    }
    for(let i = 0; i < freqT.length; i++) {
        let ascaii = T.charCodeAt(i);
        let index = ascaii - 97;
        freqT[index]++;
    }

    for(let i = 0; i < 26; i++) {
        if(freqS[i] != freqT[i]) return false;
    }

    return true;
}

console.log(validateAnagram(S, T));