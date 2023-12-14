function nser(arr: number[]): number[] {

    let n = arr.length;
    let ans = new Array(n);

    let st: number[] = [];

    for(let i = n-1; i >= 0; i--) {
        //Remove all small 
        while(st.length > 0 && arr[i] <= st[st.length-1] ) st.pop();

        if(st.length == 0) ans[i] = -1;
        else ans[i] = st[st.length-1];

        st.push(arr[i]);
    }
    return ans;
}


console.log(nser([5,9,2,3,5,3,2,4,4,10]));