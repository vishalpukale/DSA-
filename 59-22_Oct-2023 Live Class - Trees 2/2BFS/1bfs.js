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
function bfs(root) {
    var queue = [];
    queue.push(root);
    var ans = [];
    while (queue.length > 0) {
        //Remove
        var current = queue.shift();
        //Work ie Print
        ans.push(current.value);
        //Add left 
        if (current.left != null)
            queue.push(current.left);
        //Add right
        if (current.right != null)
            queue.push(current.right);
    }
    console.log(ans);
}
bfs(root);
