var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.head = new Node(0)
    this.tail = new Node(0)
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.nodeMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.nodeMap.has(key)) {
        let node = this.nodeMap.get(key)
        this.remove(node)
        this.addtoFront(node)
        return node.value
    }
    else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.nodeMap.has(key)) {
        //update
        let exisitingNode = this.nodeMap.get(key)
        exisitingNode.value = value;
        this.remove(exisitingNode);
        this.addtoFront(exisitingNode);
    }
    else {
        if (this.capacity === this.nodeMap.size) {
            this.nodeMap.delete(this.tail.prev.key);
            this.remove(this.tail.prev)
        }

        let node = new Node(key, value)
        this.nodeMap.set(key, node)
        this.addtoFront(node)

    }
};

LRUCache.prototype.addtoFront = function (node) {
    let next = this.head.next
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
    next.prev = node;
}

LRUCache.prototype.remove = function (node) {
    let prev = node.prev
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null;
        this.prev = null;
    }
}