Recursion Notes:

- One of the most popular interview topics.
- A function which refers to itself inside of the function.
- Good for tasks that have repeated subtasks to do (similar to when a folder needs to look inside other folders to find a file, traversing a tree).
- Downside to Recursion: hold onto each call, remember them one by one which can get really expensive (computer needs to allocate memory to remember things).

Example of Recursion:

// Stackoverflow since the calls are endless and memory is limited
    function inception(){
        debugger;
        inception();
    }