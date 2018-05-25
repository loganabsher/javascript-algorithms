class SingleLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
  add(node) {
    if(this.next) {
      this.next.add(node);
    }else{
      this.next = node;
    }
  }
}


const root = new SingleLinkedList(6);
const one = new SingleLinkedList(20);
const two = new SingleLinkedList(60);

root.add(one);
root.add(two);

console.log(root);

class DoubleLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  add(node) {
    if(this.next) {
      this.next.add(node);
    }else{
      this.next = node;
      node.prev = this;
    }
  }
}

const rootTwo = new DoubleLinkedList(6);
const oneTwo = new DoubleLinkedList(20);
const twoTwo = new DoubleLinkedList(60);

rootTwo.add(oneTwo);
rootTwo.add(twoTwo);

console.log(rootTwo);
