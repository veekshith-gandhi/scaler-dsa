### What is a Linked List?

### A Linked List is a linear data structure where elements (nodes) are stored separately in memory and are connected using pointers.

### Each node contains: [ data | next ]

### Types of Linked Lists
 
1. Singly Linked List 
    [10|next] → [20|next] → [30|null]
    Each node points to the next
    You can only go forward

2. Doubly Linked List
    null ← [10|prev,next] ↔ [20|prev,next] ↔ [30|prev|null]
    Each node points both forward and backward
    Can go back and forth

3. Circular Linked List
    [10|next] → [20|next] → [30|next] → back to [10|next]
    Last node points to the first
    Useful in round-robin scheduling, music playlists, etc.


### Issue with array? -- fixed size

## Pros Linked list - >
    
    1. linear Data structure
    2. Non contiguos
    3. Dynamic Size
    4. Fast Insert/Delet O(1)
    
## Cons Linked List - >

    1. Complex couz of managaing pointers 
    2. Poor caching couz of Non contiguos
    3. Memory usage (holds address of refernce/pointers)
    4. slow travsering o(n) each elemnt needs to be tested

