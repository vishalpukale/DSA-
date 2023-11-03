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

function findInBinaryTree(node : TreeNode | null, target : number): boolean {

    if(node == null) return false;
    if(node.value == null) return true;

    let left = findInBinaryTree(node.left, target);
    if(left == true) return true;

    let right = findInBinaryTree(node.right, target);
    if(right == true) return true;

    return false;
}

console.log(findInBinaryTree(root, 13)); 