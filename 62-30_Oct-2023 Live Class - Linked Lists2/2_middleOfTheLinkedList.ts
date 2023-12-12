  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
 }

function middleNode(head: ListNode | null): ListNode | null {
    if(head == null) return null;  
    
    let fast: any =head;
    let slow: any =head;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //The above loop will only break if fast becomes null or tail

    return slow;  //the place where slow is standing will be the middle point
};