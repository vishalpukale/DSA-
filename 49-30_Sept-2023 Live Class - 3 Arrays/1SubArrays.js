var arr = [1, 2, 3, 4];
function subArrays(arr) {
    for (var sp = 0; sp < arr.length; sp++) {
        for (var ep = sp; ep < arr.length; ep++) {
            var s = "";
            for (var i = sp; i <= ep; i++) {
                s += arr[i] + ", ";
            }
            console.log(s);
        }
    }
}
subArrays(arr);
