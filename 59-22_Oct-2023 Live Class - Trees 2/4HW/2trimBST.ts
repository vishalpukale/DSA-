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

let treeArr = [50, 20, 10, -1, -1, 30, 25, -1, -1, 45, -1, -1, 60, 55, -1, -1, 70, -1, -1];
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


function trimBST(root: TreeNode| null, low: number, high: number): TreeNode| null {
    if(!root) return null;

    //greater
    if(root.value > high){
        return trimBST(root.left, low, high);
    }
    //lesser
    if(root.value < low){
        return trimBST(root.left, low, high);
    }

    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}

console.log(trimBST(root, 10, 20));