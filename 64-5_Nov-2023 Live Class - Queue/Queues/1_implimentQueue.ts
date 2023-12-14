class ListNode{
    val : number;
    next : null | ListNode;

    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList{
    private head: ListNode | null;
    private tail: ListNode | null;
    private size : number;

    constructor(){
        this.head = this.tail = null;
        this.size = 0;
    }


    getSize = function(): number {
        return this.size;
    }

    removeFirst = function(): ListNode | null {
        if(this.size == 0) return null;
        let retValue = this.head;

        if(this.size == 1) {
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
        }
        this.size--;
        retValue.next = null;  
        return retValue;
    }

    addLast = function(val: number): void {
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }
}



class Queue{
    ll: LinkedList | null;

    constructor(){
        this.ll = new LinkedList();
    }


    length = function(): number{
        return this.ll.getSize();
    }

    push = function(val: number): void{
        this.ll.addLast(val);
    }

    pop = function(): number{
        let retVal = this.ll.removeFirst()?.val;
        return retVal;
    }
}


let q = new Queue();

q.push(20);
q.push(30);
q.push(40);
q.push(50);

console.log(q.pop()); 
console.log(q.pop()); 
q.push(60);


console.log(q);