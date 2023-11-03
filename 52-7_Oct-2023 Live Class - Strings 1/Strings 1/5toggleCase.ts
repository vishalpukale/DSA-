let s = "AaBbCcDefg";

function toggleCase(s: string): string {
    let ans = "";

    for(let i = 0; i < s.length; i++){
        let ascaii = s.charCodeAt(i);  // Here i am getting the ascaii code

        if(ascaii>=97){
            ascaii -= 32;
        }
        else{
            ascaii += 32;
        }
        ans += String.fromCharCode(ascaii); //I am generating a char associated with new ascaii value
    }
    return ans;
}


console.log(toggleCase(s));