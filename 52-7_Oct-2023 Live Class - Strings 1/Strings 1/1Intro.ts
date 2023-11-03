let s: any = "abcd";

s = s.split("");// String is array now
s[0] = "v";
s = s.join("");//Converted array back to string

// s[0] = "v"; //String are Immutable means we cant change values of strings directly
console.log(s[3]); 
console.log(s);