let s: string = "ab#c";
let t: string = "ad#c";

function backspaceCompare(s: string, t: string): boolean {
    
    let st1: any = [];
    for(let i = 0; i<s.length; i++){
        if(s[i] == '#'){ 
            if(st1.length > 0) st1.pop();
        }
        else st1.push(s[i]); 
    }
    let processed1 = st1.join('');

    let st2: any = [];
    for(let i = 0; i<t.length; i++){
        if(t[i] == '#'){ 
            if(st2.length > 0) st2.pop();
        }
        else st2.push(t[i]); 
    }
    let processed2 = st2.join('');

    if(processed1 == processed2) return true;
    else return false;
};



backspaceCompare(s, t)