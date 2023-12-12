class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
  }
}



function getSize(head: ListNode | null){
    let temp = head;
    let count = 0;

    while(temp != null){
        count++;
        temp = temp.next;
    }
    return count;
}


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let sz1 = getSize(headA);
    let sz2 = getSize(headB);

    let t1: any = headA;
    let t2: any = headB;

    if(sz1 > sz2){
        while(sz1 > sz2){
            t1 = t1.next;
            sz1--;
        }
    }else{
        while(sz1 < sz2){
            t2 = t2.next;
            sz2--;
        }
    }

    if(t1 != t2){
        t1 = t1.next;
        t2 = t2.next;
    }

    return t1;
}