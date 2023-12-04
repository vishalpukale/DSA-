class ListNode{
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    
    if(head == null) return null;
    let curr : any= head;
    while(curr != null){
        let temp = curr.next;

        while(temp != null && curr.val == temp.val){
                temp = temp.next;
        }
        curr.next = temp;
        curr = curr.next;
    }
    return head;
};