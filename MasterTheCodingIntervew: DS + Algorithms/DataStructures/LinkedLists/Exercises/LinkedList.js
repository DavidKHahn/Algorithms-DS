// 1 --> 10 --> 99 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// instantiate the Node class with a value property and next property
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class LinkedList {
    constructor(value) {
        // keeps track of the head
        this.head = {
            value,
            next: null
        }
        // this refers to the LinkedList we create
        // currently we only have one item the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value,
            next: null
        };
        // grabs tail and then the next value (pointer) and points to newNode
        this.tail.next = newNode; // still currently until it is updated tail: { value: 10, next: null },
        // set this.tail is the newNode;
        this.tail = newNode;
        this.length++; // 2
        return this; // LinkedList reference
    }
    prepend(value){
        const newNode = {
            value,
            next: null
        };
        // created a pointer which points to the very first item on the list
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // prints out LinkedList values in array
    printList() {
        const array = [];
        let currentNode = this.head;
        // as long as there is a current node and not pointing to a null terminator
        while (currentNode !== null) {
        // push currentNode value into array
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // check params
        // as long as index is greater than or equal to this.length
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value,
            next: null
        };
        // points to the leader of the list
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        // deleted reference of '5' but saved the reference to it with 'holdingPointer'
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index){
        // check params but we can assume that the index is a valid number/index
        let counter = 0;
        let currentNode= this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

// instantiate a LinkedList
const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList());
// console.log(myLinkedList)