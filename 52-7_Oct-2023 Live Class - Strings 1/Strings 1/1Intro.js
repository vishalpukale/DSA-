var s = "abcd";
s = s.split(""); // String is array now
s[0] = "v";
s = s.join("");
// s[0] = "v"; //String are Immutable means we cant change values of strings directly
console.log(s[3]);
console.log(s);
