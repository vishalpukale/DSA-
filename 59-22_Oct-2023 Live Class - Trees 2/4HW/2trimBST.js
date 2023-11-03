var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var treeArr = [50, 20, 10, -1, -1, 30, 25, -1, -1, 45, -1, -1, 60, 55, -1, -1, 70, -1, -1];
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
function trimBST(root, low, high) {
    if (!root)
        return null;
    //greater
    if (root.value > high) {
        return trimBST(root.left, low, high);
    }
    //lesser
    if (root.value < low) {
        return trimBST(root.left, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}
console.log(trimBST(root, 10, 20));
