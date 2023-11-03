var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        //display linked list
        this.display = function () {
            var temp = this.head;
            var s = "";
            while (temp != null) {
                s += temp.val + "-> ";
                temp = temp.next;
            }
            s += "null";
            console.log(s);
        };
        //We can only access the size inside the constructor only so no can can have access of the size to modify it
        this.getSize = function () {
            return this.size;
        };
        //add new node in the end of the List node 
        this.addLast = function (val) {
            var newNode = new ListNode(val);
            if (this.tail == null) { //list node is empty
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        };
        //add new node in the end of the List node 
        this.addFirst = function (val) {
            var newNode = new ListNode(val);
            if (this.head == null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size++;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
console.log(ll.getSize());
ll.addLast(50);
ll.addLast(40);
ll.addLast(30);
ll.addLast(20);
ll.addLast(10);
ll.addFirst(50);
ll.addFirst(10000);
console.log(ll.getSize());
ll.display();
