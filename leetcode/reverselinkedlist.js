//Reverse a singly linked list.
//    Example:
//Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
//Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

var reverseList = function (head) {
    let previous = null
    while (head) {
        //next is [2,3,4,5]
        let next = head.next
        //head.next mutates the head, in first instance makes it so that 1's next pointer is null
        //now head = [1, null]
        head.next = previous;
        previous = head
        head = next
    }
    return previous
};