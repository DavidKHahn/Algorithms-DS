Searching/Traversal Notes:

- Linear Search:
 - We have items or nodes and go one by one in the list to find the item or node.
 - Best Case: O(1), Worst Case: O(n)
 - 'indexOf', 'findIndex', 'find', 'includes' (Javascript)
 - Generally have for loops in a Linear search (arrays, linked lists, hash tables, queues, stacks).
 - O(n)

- Binary Search:
 - If it's sorted then we can do better than O(n). We can discard half the items instead of going through one-by-one.
 - Storing data in a tree instead of a linear data structure like an array is more efficient.
 - Split a list, decide left or right and since list is sorted it's easier to find where to discard.
 - Merge Sort, Quick Sort do something similar with splitting lists in divide and conquer.
 - Generally use while loops checking half (left vs right).
 - O(log N)

- Depth First Search/Traversal:
 - Time complexity is O(n)
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.
 - Search follows one branch of the tree down as many levels as possible until the target notice is found or the end is reached.  It continues at the nearest ancestor with an unexplored child.
 - Has a lower memory requirement than BFS since it's not necessary to store all the child pointers at each level.
 - We want to go as deep as possible with DFS starting from left then to the right hence depth first.
 - If you have an idea or know target node is closer to bottom of tree than DFS is better than BFS since it'll search with the deep depths.

 - Pros: Less memory, Does Path exist? (Determining whether a path exists between node and source).
 - Cons: Can get slow (not good at finding shortest path).


- Breadth First Search/Traversal:
 - Time complexity is O(n)
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.
 - Start with the root node, move left to right across the second level then move to left to right across the third and so forth until you find the node or tree ends.
 - Uses additional memory since it's necessary to track child nodes of all the nodes on a given level while searching that level.
 - If you have an idea or know target node is closer to top of tree than BFS is better than DFS since it'll search with closest nodes first.

 - Pros: Very good at finding shortest path, closer nodes.
 - Cons: More memory.


USEFUL LINKS:

- https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr