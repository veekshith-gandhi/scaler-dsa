class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add node to end
    add(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next !== null) {
          current = current.next;
        }
  
        current.next = newNode;
      }
    }
  
    // Search for a value
    search(value) {
      let current = this.head;
      let position = 0;
  
      while (current !== null) {
        if (current.data === value) {
          return `✅ Found value ${value} at position ${position}`;
        }
        current = current.next;
        position++;
      }
  
      return `❌ Value ${value} not found in the list`;
    }
  
    // Print list
    printList() {
      let current = this.head;
      let result = "";
  
      while (current !== null) {
        result += current.data + " → ";
        current = current.next;
      }
  
      console.log(result + "null");
    }
  }
  
  // ✅ Usage
  const myList = new LinkedList();
  
  myList.add(5);
  myList.add(10);
  myList.add(20);
  myList.add(30);
  console.log("LINKED---",myList)
  myList.printList();                       // 5 → 10 → 20 → 30 → null
  console.log(myList.search(20));          // ✅ Found value 20 at position 2
  console.log(myList.search(100));         // ❌ Value 100 not found in the list
  