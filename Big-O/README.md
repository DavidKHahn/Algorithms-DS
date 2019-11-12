### BIG O ###

**What is good code?**

 - Readable
 - Scalable

 - Big-O Complexity revolves around Operations needed for Elements (Algorithmic efficiency).

 - Big-O allows us and concerns us with how many steps it takes in a function.

 - With Big O, we're worried about scale as things grow larger and larger.

    O(n) - Linear: Number of operations x Elements
    O(1) - Constant Time: Same number of operations

**Calculating Big O**

**Rule Book**

- Rule 1: Worst Case
    - Big O only cares about worst case scenario.

- Rule 2: Remove Constants
    - During interviews we generally drop the constants as the long the line is linear then Big O should be represented as o(n).

- Rule 3: Different terms for inputs
    - Make sure to know that we have different arrays or notations for each array (different inputs have different variables).  Any step that happens in same indentation you add if nested then you multiply.

- Rule 4: Drop Non Dominants
    - We are worried about scale so we drop smaller figures (i.e. O(n + n^2) simplified to O(n^2))



