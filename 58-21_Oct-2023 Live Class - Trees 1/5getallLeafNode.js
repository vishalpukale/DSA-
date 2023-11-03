var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var treeArr = [8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, 13, -1, -1, -1];
var i = 0;
function createTree(arr) {
    if (arr[i] == -1) {
        i++;
        return null;
    }
    var me = new TreeNode(arr[i]);
    i++;
    var leftChild = createTree(arr);
    var rightChild = createTree(arr);
    me.left = leftChild;
    me.right = rightChild;
    return me;
}
var root = createTree(treeArr);
function getAllLeafNode(node) {
    if (node == null)
        return [];
    if (node.right == null && node.right == null)
        return [node.value];
    var leftLeaves = getAllLeafNode(node.left);
    var rightLeaves = getAllLeafNode(node.right);
    var ans = [];
    for (var _i = 0, leftLeaves_1 = leftLeaves; _i < leftLeaves_1.length; _i++) {
        var x = leftLeaves_1[_i];
        ans.push(x);
    }
    for (var _a = 0, rightLeaves_1 = rightLeaves; _a < rightLeaves_1.length; _a++) {
        var x = rightLeaves_1[_a];
        ans.push(x);
    }
    return ans;
}
console.log(getAllLeafNode(root));
