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

function nodeToRootPath(node: TreeNode | null, target: number): number[]{

    if(node == null) return [];
    if(node.value == target) return [node.value];

    let left = nodeToRootPath(node.left, target);
    if(left.length != 0){
        left.push(node.value);
        return left;
    }

    let right = nodeToRootPath(node.right, target);
    if(right.length != 0){
        right.push(node.value);
        return right;
    }

    return [];
} 



console.log(nodeToRootPath(root, 13));