const Node = require('./node');

class LinkedList {
    constructor() {
        this.clear();
    }

    append(data) {
        this._tail.next = new Node(data, this._tail);
        this._tail = this._tail.next;        
        if (this.isEmpty()) {
            this._head = this._tail;
        }        
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this.nodeByIndex(index).data;
    }

    insertAt(index, data) {
        let node = this.nodeByIndex(index);
        if (node.prev) {
            node.prev.next = new Node(data, node.prev, node);
            node.prev = node.prev.next;
        }        
        this.length++;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();     
        return this;   
    }

    deleteAt(index) {
        let node = this.nodeByIndex(index);
        if (node.prev) {
            node.prev.next = node.next;
        }
        node.next.prev = node.prev;
        this.length--;
        return this;
    }

    reverse() {        
        this._head = this._tail;    
        let node = this._tail.prev;
        while (node.next.prev) {
            node = node.next;
            let prev = node.next;        
            node.next = node.prev;
            node.prev = prev;      
        }        
        this._head.prev = null;
        this._tail = node;  
        return this;
    }

    indexOf(data) {
        let node = this._head;
        if (node.data === data) {
            return 0;
        }
        for (let i = 1; i < this.length; i++) {
            node = node.next;
            if (node.data === data) {
                return i;
            }            
        }
        return -1;
    }

    nodeByIndex(index) {        
        let node;
        if (index <= this.length / 2) {
            node = this._head;
            for (let i = 1; index > 0, i <= index; i++) {
                node = node.next;                
            }
        } else {
            node = this._tail;
            for (let i = this.length - 2; index < this.length - 1, i >= index; i--) {
                node = node.prev;                
            }            
        }
        return node;
    }
}

module.exports = LinkedList;