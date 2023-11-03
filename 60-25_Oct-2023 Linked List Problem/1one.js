var Node = /** @class */ (function () {
    function Node() {
        this.data = 0;
        this.next = null;
    }
    return Node;
}());
var head;
function insert(root, item) {
    var temp = new Node();
    temp.data = item;
    temp.next = root;
    root = temp;
    return root;
}
function print(head) {
    while (head != null) {
        console.log(head.data + " ");
        head = head.next;
    }
}
function arrToList(arr) {
    var n = arr.length;
    head = null;
    for (var i = n - 1; i >= 0; i--) {
        head = insert(head, arr[i]);
    }
    return head;
}
var arr = [1, 2, 3, 4];
head = arrToList(arr);
console.log(head);
