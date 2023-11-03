class ListNode{
    val: number;
    next: ListNode | null;

    constructor(v: number){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{

    private head: ListNode | null;    //private access modifier encapsulation
    private tail: ListNode | null;
    private size: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //display linked list
    display = function(): void{  // TC : O(N)
        let temp = this.head;
        let s: string = "";
        while(temp != null){
            s += temp.val+ "-> ";
            temp = temp.next;
        }
        s += "null";
        console.log(s);
    }


    //We can only access the size inside the constructor only so no can can have access of the size to modify it
    getSize = function (): number { //TC : O(1)
        return this.size;
    };


    //add new node in the end of the List node 
    addLast = function (val: number): void {  //Tc : O(1)
        let newNode = new ListNode(val);
        if(this.tail == null) { //list node is empty
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }


    //add new node in the end of the List node 
    addFirst = function(val: number){
        let newNode = new ListNode(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
}

let ll = new LinkedList();

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