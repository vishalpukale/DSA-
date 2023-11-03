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
function nodeToRootPath(node, target) {
    if (node == null)
        return [];
    if (node.value == target)
        return [node.value];
    var left = nodeToRootPath(node.left, target);
    if (left.length != 0) {
        left.push(node.value);
        return left;
    }
    var right = nodeToRootPath(node.right, target);
    if (right.length != 0) {
        right.push(node.value);
        return right;
    }
    return [];
}
console.log(nodeToRootPath(root, 13));
function lowestCommonAncestor(root, p, q) {
    var ntrpP = nodeToRootPath(root, p);
    var ntrpQ = nodeToRootPath(root, q);
    var i = ntrpP.length - 1;
    var j = ntrpQ.length - 1;
    while (ntrpP[i] == ntrpP[j]) {
        i--;
        j--;
    }
    return ntrpQ[i + 1];
}
console.log(lowestCommonAncestor(root, 4, 7));
