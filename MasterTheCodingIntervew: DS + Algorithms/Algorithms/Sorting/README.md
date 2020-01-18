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
-

USEFUL Links:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
- https://www.toptal.com/developers/sorting-algorithms (Sorting Animations)
- https://www.bigocheatsheet.com/ (Big O CheatSheet)
- https://www.youtube.com/user/AlgoRythmics/videos (Dancing Algorithms Playlist)