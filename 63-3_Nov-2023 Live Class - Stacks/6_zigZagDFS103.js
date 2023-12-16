var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function zigzagLevelOrder(root) {
    var ans = [];
    if (root == null)
        return ans;
    var curr = [];
    var next = [];
    curr.push(root);
    var level = "even";
    while (curr.length > 0) {
        var currLevel = [];
        while (curr.length > 0) {
            var currNode = curr.pop();
            currLevel.push(currNode.val);
            if (level == "even") {
                // add left child then 
                if (currNode.left != null)
                    next.push(currNode.left);
                //right child
                if (currNode.right != null)
                    next.push(currNode.right);
            }
            else {
                //add right child then
                if (currNode.right != null)
                    next.push(currNode.right);
                //left child
                if (currNode.left != null)
                    next.push(currNode.left);
            }
        }
        ans.push(currLevel);
        curr = next;
        next = [];
        if (level == "even")
            level = "odd";
        else
            level = "even";
    }
    return ans;
}
;
