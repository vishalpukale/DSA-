class ListNode{
    val: number;
    next: ListNode | null;
    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}


//LinkedList Class
class LinkedList{
    private head: ListNode | null;
    private size: number;

    constructor(){
        this.head = null;
        this.size = 0;
    }


    addFirst = function(val: number): void {
        let nn = new ListNode(val);

        if(this.head == null){
            this.head = nn;
        }else{
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    }



    removeFirst = function(): number {
        if(this.head == null){
            console.log("Linked list is empty");
            return -1;
        }

        let retVal = this.head.val;
        this.head = this.head.next;
        this.size--;

        return retVal;
    }


    getFirst = function(): number{
        if(this.head == null) return -1;
        return this.head.val;
    }


    getSize = function(): number{
        return this.size;
    }
}



class Stack{

    lili : LinkedList;

    constructor(){
        this.lili = new LinkedList();
    }


    push = function(val: number): number {
        return this.lili.addFirst(val);
    }

    pop = function(): number {
        return this.lili.removeFirst();
    }

    peek = function(): number {
        return this.lili.getFirst();
    }

    size = function(): number {
        return this.lili.getSize();
    }
}


let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);

console.log(st.pop());
console.log(st.peek());
st.pop();
console.log(st.size());
console.log(st.pop());