class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root === null) {
        // make root node our newNode
            this.root = newNode
        } else {
            let currentNode = this.root;
            while(true) {
            // if value is less than the currentNode's value go left
                if(value < currentNode.value) {
                    // left
                    // if currentNode.left does not exist
                    if(!currentNode.left) {
                        // make newNode left
                        currentNode.left = newNode;
                        // return this to stop looping
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    // Right
                    // if currentNode.right does not exist
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        // return this to stop looping
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value){
        // checks if root doesn't exist
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            // if value is less than currentNode value go left
            if(value < currentNode.value) {
                currentNode = currentNode.left
            // if value is greater than currentNode value go right
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        // return false if we don't find anything
        return false;
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170))
console.log(tree.lookup(20))
// console.log(JSON.stringify(traverse(tree.root))) // {"value":9,"left":null,"right":null}
//      9
//  4       20
//1   6   15  170

function traverse(node){
    const tree = { value: node.value };
    tree.left = { value: node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}