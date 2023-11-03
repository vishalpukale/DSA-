class TreeNode{
    value : number;
    left : TreeNode | null;
    right : TreeNode | null;
    constructor(value : number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let treeArr = [8,3,1,-1,-1,6,4,-1,-1,7,-1,-1,10,-1,14,13,-1,-1,-1];
let i = 0;


function createTree(arr): TreeNode | null {
    if(arr[i] == -1){
        i++;
        return null;
    }

    let me = new TreeNode(arr[i]);
    i++;

    let leftChild = createTree(arr);
    let rightChild = createTree(arr);

    me.left = leftChild;
    me.right = rightChild;

    return me;
}


let root = createTree(treeArr);

function maxElement(root: TreeNode | null): number{

    if(root == null) return -Infinity;

    let leftMax : number = maxElement(root.left);
    let rightMax : number = maxElement(root.right);

    return Math.max(root.value, Math.max(leftMax, rightMax));
}

console.log(maxElement(root));