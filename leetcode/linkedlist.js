//***************** */

//Singly LinkedList

// Unlike the array, we are not able to access a random element in a singly-linked list in constant time. 
//If we want to get the ith element, we have to traverse from the head node one by one.
// It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.

//Unlike an array, we don’t need to move all elements past the inserted element. 
//Therefore, you can insert a new node into a linked list in O(1) time complexity, which is very efficient.

//In our first step, we need to find out prev and next. 
//It is easy to find out next using the reference field of cur. 
//However, we have to traverse the linked list from the head node to find out prev which will take O(N) time on average
//, where N is the length of the linked list. So the time complexity of deleting a node will be O(N).
//The space complexity is O(1) because we only need constant space to store our pointers.



//****************** */


// const n1 = {
//     data: 100
// }

// const n2 = {
//     data: 200
// }

// n1.next = n2;
// console.log(n1)

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100)
// console.log(n1)

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }  

    //Insert First Node 

    insertFirst(data){
        //this.head is only null when there are no values in ll 
        this.head = new Node(data, this.head)
        this.size++;
    }

    //Insert Last Node

    insertLast(data){
        let node = new Node(data);
        let current;


        //if ll is empty, this will be first node
        if (!this.head) {
            this.head = node;
        }
        else {
            
            current = this.head;
            //if ll has a next node, while loop thru until you find the last node
            while(current.next) {
                current = current.next;
            }
            //set the final node value to the node from line 39
            current.next = node;
        }
        //add to the size
        this.size++;
    }

    //Insert at Index
    insertAt(data, index){
        //if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }
        
        //if first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current;
        let previous;

        //set current to first 
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; //node before index
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    //Get at Index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if (count === index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //Remove at Index

    removeAt(index){
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first 
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next
        }
        this.size--;
    }

    //Clear List
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //Print List data

    printListData(){
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }


}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);
ll.insertAt(500, 2)
// ll.getAt(1)
// ll.removeAt(5)
// ll.clearList();
ll.printListData();