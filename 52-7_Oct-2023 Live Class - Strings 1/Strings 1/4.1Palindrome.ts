let s = "naman";

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length-1;

    while (i < j) {
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}


function printPalindromicSubstring(s: string) : void {

    for(let i = 0; i < s.length; i++) {

        for(let j = i; j<s.length; j++) {

            let subString = s.substring(i, j + 1);
            if(isPalindrome(subString)) console.log(subString);
        }

    }
}


console.log(printPalindromicSubstring(s));