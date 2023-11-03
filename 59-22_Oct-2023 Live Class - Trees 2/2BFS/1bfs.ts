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





function bfs(root: TreeNode | null){

    let queue: any[] = [];
    queue.push(root);
    let ans: any = [];

    while(queue.length > 0){
        //Remove
        let current = queue.shift();
        //Work ie Print
        ans.push(current.value);
        //Add left 
        if(current.left != null) queue.push(current.left);
        //Add right
        if(current.right != null) queue.push(current.right);
    }
    console.log(ans);
}
bfs(root);
