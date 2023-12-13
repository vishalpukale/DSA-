var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
//LinkedList Class
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.addFirst = function (val) {
            var nn = new ListNode(val);
            if (this.head == null) {
                this.head = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            if (this.head == null) {
                console.log("Linked list is empty");
                return -1;
            }
            var retVal = this.head.val;
            this.head = this.head.next;
            this.size--;
            return retVal;
        };
        this.getFirst = function () {
            if (this.head == null)
                return -1;
            return this.head.val;
        };
        this.getSize = function () {
            return this.size;
        };
        this.head = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.push = function (val) {
            return this.lili.addFirst(val);
        };
        this.pop = function () {
            return this.lili.removeFirst();
        };
        this.peek = function () {
            return this.lili.getFirst();
        };
        this.size = function () {
            return this.lili.getSize();
        };
        this.lili = new LinkedList();
    }
    return Stack;
}());
var st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
console.log(st.pop());
console.log(st.peek());
st.pop();
console.log(st.size());
console.log(st.pop());
