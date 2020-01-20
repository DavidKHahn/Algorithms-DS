Sorting Notes:

- Companies such as Netflix, Microsoft, Google, Amazon, Apple, Facebook need custom sorted methods based on the data so that they can lower their costs and lower the operations that their computers need to do.
- Most places sort their data or preprocess it and all these companies including small ones usually sort data to make sure its meaningful.


    "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    The time and space complexity of the sort cannot be guaranteed as it depends on the implementation."


Bubble Sort:

- Loop through each item and bubble up based on the higher value until the list is completely sorted.
- Lots of comparisons and goes one by one (one of the least efficient).
- Time Complexity: O(n^2), Space Complexity: O(n)

Selection Sort:

- Works by scanning list of items for smallest element and then swapping that element for the one in the first position (repeat until the list is completely sorted).
- Time Complexity: O(n^2), Space Complexity: O(n) (doesn't really add any extra additional data besides input).

Insertion Sort:

- Not the most efficient but there's cases when it is extremely fast (particularly in small data sets).
- Useful for times when the list is almost sorted or already sorted.
- Best case scenario: O(n)

Merge Sort:

- Use Divide & Conquer method which usually gives a O(n log n).
- Do not have nested for loops which saves time.
- Efficient but also uses recursion.
- Really useful and one of the most used sorting algorithms.
- Space Complexity: O(n)

Quick Sort:

- Use Divide & Conquer method which usually gives a O(n log n).
- Do not have nested for loops which saves time.
- Uses a pivoting technique to break main list into smaller lists which is repeated until sorting is completed.
- Worst case is O(n^2) when the pivot is the smallest or largest item in the list then you're not really splitting the list in half which makes merge sort better in this case.
- Really useful and one of the most used sorting algorithms but if you can't guarantee that there's no bad data or pivot then should be avoided.
- Space Complexity: O(log(n))

USEFUL Links:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
- https://www.toptal.com/developers/sorting-algorithms (Sorting Animations)
- https://www.bigocheatsheet.com/ (Big O CheatSheet)
- https://www.youtube.com/user/AlgoRythmics/videos (Dancing Algorithms Playlist)
- https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important (Stability in Sorting Algorithms)