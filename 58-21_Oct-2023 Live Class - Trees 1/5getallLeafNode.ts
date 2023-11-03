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

function getAllLeafNode(node : TreeNode | null): number[]{
    if(node == null) return [];

    if(node.right == null && node.right == null) return [node.value];

    let leftLeaves = getAllLeafNode(node.left);
    let rightLeaves = getAllLeafNode(node.right);

    let ans : number[]= [];

    for(let x of leftLeaves) ans.push(x);
    for(let x of rightLeaves) ans.push(x);

    return ans;
}


console.log(getAllLeafNode(root));