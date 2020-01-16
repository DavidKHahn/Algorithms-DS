Trees Notes:

- Trees contain hierarchal structure and can have 0 or more child nodes (example would be an inverse tree).  Generally starts off with a root node, parent, child, leaf, sibling (ex. facebook comments, chess games).
- Same principle as Linked Lists (also type of Trees): can contain any type of info.
- Many types of Tree Data Structures for each specific use case.

Binary Tree:

- Each node can have only 0,1,2 nodes and each child can have only one parent.

    function BinaryTreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

Binary Search Tree Methods:
- lookup O(logN)
- insert O(logN)
- delete O(logN)

Perfect Binary Tree:

- Number of total nodes on each level doubles as we move down tree.
- Number of nodes on the last level is equal to the sum of the number of nodes on all the other levels plus 1.

Full Binary Tree