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
function displayTree(node) {
    if (node == null)
        return;
    var leftnode = node.left == null ? "null" : node.left.value;
    var rightnode = node.right == null ? "null" : node.right.value;
    console.log(node.value + " --> " + leftnode + ", " + rightnode);
    displayTree(node.left);
    displayTree(node.right);
}
var root = createTree(treeArr);
displayTree(root);
