var s = '{[()()]}[]';
function areSame(opening, closing) {
    if (opening == '(' && closing == ')')
        return true;
    else if (opening == '{' && closing == '}')
        return true;
    else if (opening == '[' && closing == ']')
        return true;
}
function isValid(s) {
    var st = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            st.push(s[i]);
        }
        else {
            if (st.length == 0)
                return false;
            if (areSame(st[st.length - 1], s[i])) {
                st.pop();
            }
            else {
                return false;
            }
        }
    }
    if (st.length != 0)
        return false; //in last the stack should be empty means all the opening bracket has been closed
    else
        return true;
}
console.log(isValid(s));
