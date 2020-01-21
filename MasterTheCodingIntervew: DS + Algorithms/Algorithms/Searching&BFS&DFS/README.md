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
 - We get O(log N) for searching compared to O(n) in arrays.
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.

- Breadth First Search/Traversal:
- We get O(log N) for searching compared to O(n) in arrays.
 - Hash Tables aren't ordered which is why Trees/Graphs are used often when we want to search nodes or visit every node.
 - Represents a lot of data that models the real world.
