class Node{
    constructor(){
        this.data = 0;
        this.next = null;
    }
}

let head;

function insert(root, item){
    var temp = new Node();
    temp.data = item;
    temp.next = root;
    root = temp;
    return root;
}



function print(head){
    while(head != null){
        console.log(head.data + " ");
        head = head.next;
    }
}


function arrToList(arr){
    let n = arr.length;
    head = null;
    for(let i = n-1; i >= 0; i--){
        head = insert(head, arr[i]);
    }
    return head;
}

let arr = [1,2,3,4];


head = arrToList(arr);
console.log(head);