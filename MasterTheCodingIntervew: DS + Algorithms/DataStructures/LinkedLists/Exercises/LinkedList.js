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
    // list out LinkedList in array
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

    }
}
// instantiate a LinkedList
const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
// LinkedList {
//     head: { value: 10, next: { value: 5, next: [Object] } },
//     tail: { value: 16, 2next: null },
//     length: 3 }
myLinkedList.prepend(1)
myLinkedList.printList();
// myLinkedList.insert(2, 99)
console.log(myLinkedList)