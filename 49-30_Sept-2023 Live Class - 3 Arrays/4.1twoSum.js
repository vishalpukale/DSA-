var arr = [2, 7, 11, 15];
function twoSum(arr, target) {
    var hashmap = {};
    for (var i = 0; i < arr.length; i++) {
        var partner = target - arr[i];
        if (hashmap[partner] != undefined) {
            //partner is present, answer found
            return [hashmap[partner], i];
        }
        hashmap[arr[i]] = i;
    }
    return [];
}
console.log(twoSum(arr, 17));
