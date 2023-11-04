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


    //remove first 
    removeFirst = function(): number{
        //if the link list is empty
        if(this.size == 0){
            console.log("empty link list");
            return -1;
        }

        let returnVal: number = this.head.val;

        //If there is a single node
        if(this.head.next == null){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next;
        }
        this.size--;
        return returnVal;
    }


    //remove last
    removeLast = function(): number{ // TC : O(N)
        //if the link list is empty
        if(this.size == 0){
            console.log("empty link list");
            return -1;
        }

        let returnVal = this.tail.val;
        if(this.head.next == null){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            while(temp.next != this.tail){
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;   
        }
        this.size--;
        return returnVal;
    }


    //Get an element from the index  
    //Simply we are implementing the indexing in linked list    
    getAt = function(index: number): ListNode|null {
        if(index < 0 || index >= this.size){
            console.log("Index out of range");
            return null;
        }

        let temp = this.head;
        let currentIndex = 0;

        while(currentIndex != index){
            currentIndex++;
            temp = temp.next;
        }
        return temp;
    }


    //Add a node at a index 
    addAt = function(index: number, val: number): void{
        //invalid case
        if(index < 0 || index > this.size){
            console.log("Index out of range");
            return;
        }else if(index == 0){
            this.addFirst(val);
            return;
        }else if(index == this.size){
            this.addLast(val);
            return;
        }
        //add in the middle of the linked list
        else{
            let nn = new ListNode(val);
            let temp = this.getAt(index - 1);
            nn.next = temp.next;
            temp.next = nn;
            this.size++;
        }

    }


    //remove the node from the list
    removeAt = function(index: number): number {
        //invalid case
        if(index < 0 || index >= this.size){
            console.log("Index out of range");
            return -1;
        }//remove first
        else if(index == 0){
            return this.removeFirst();
        }//remove last
        else if(index == this.size-1){
            return this.removeLast();
        }

        else{
            let temp = this.getAt(index-1)
            let returnVal = temp.next.val;
            temp.next = temp.next.next;
            this.size--;
            return returnVal;
        }
    }
}


let ll = new LinkedList();

console.log(ll.getSize());

ll.addLast(50);
ll.addLast(40);
ll.addLast(30);
ll.addLast(20);
ll.addLast(10);

ll.addFirst(10000);


ll.display();
console.log("We have removed the first node which is - "+ll.removeFirst());
ll.display();

console.log(ll.getAt(4)?.val);
ll.display();

ll.addAt(2, 5000);
ll.display();

ll.removeAt(0);
ll.display(); 