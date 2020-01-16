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

Binary Search Tree (subset of BT):
- Really good at searching and comparing things.
- Preserves relationships.
- Keep going to the right the number increases and to the left is decreasing.
- A node can only have two children.
- Compared to Hash Tables, BST contains sorted data and structure of parent-child relationship.
- An array or object will have faster operations on avg.

Binary Search Tree Methods:
- lookup O(logN)
- insert O(logN)
- delete O(logN)

    Level 0: 2^0 = 1;
    Level 1: 2^1 = 2;
    Level 2: 2^2 = 4;
    Level 3: 2^3 = 8;

    # of nodes = 2^h - 1
    log nodes = height
    10^2 = 100;

    if we know how many levels (height) then we can find how many total nodes there are
    Log n simply means that based on the height the max number of decisions (divide & conquer approach in a phonebook: you look for the alphabet and then search)

Pros:
- Better than O(n) assuming that the BST is balanced
- Ordered
- Flexible Size (can place node anywhere in memory, flexible side)
- Inserts/Deletes are also faster than an array unless the array is adding to the end (arrays have to shift)

Cons:
- No O(1) Operations (usually have to do some sort of traversal through the tree for any lookup)
- Not the fastest for anything usually O(log n).

Perfect Binary Tree:

- Number of total nodes on each level doubles as we move down tree.
- Number of nodes on the last level is equal to the sum of the number of nodes on all the other levels plus 1.

Full Binary Tree


Common Interview Questions:
- Why a unbalanced search tree is bad?
- Long Linked List and instead of being able to do O(log N) searches are O(n) linear time, loop through more items. AVL and Red Black Trees allows us to balanced a BST for performance optimizations.

Helpful Links:
- https://visualgo.net/en/bst