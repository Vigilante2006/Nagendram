let middleNodeofLinkedList = (head)=>{
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
let head = [1,2,3,4,5];
console.log(middleNodeofLinkedList(head));