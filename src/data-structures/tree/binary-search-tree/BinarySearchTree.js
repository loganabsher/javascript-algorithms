'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if(node.value < this.value) {
      if(this.left) {
        this.left.add(node);
      }else{
        this.left = node;
      }
    }else if(node.value > this.value) {
      if(this.right) {
        this.right.add(node);
      }else{
        this.right = node;
      }
    }
  }
}


const root = new BinarySearchTree(14);
const left = new BinarySearchTree(7);
const right = new BinarySearchTree(21);
const leftleft = new BinarySearchTree(3);
const leftright = new BinarySearchTree(9);
const rightleft = new BinarySearchTree(18);
const rightright = new BinarySearchTree(26);

root.add(left);
root.add(right);
root.add(leftleft);
root.add(leftright);
root.add(rightleft);
root.add(rightright);

console.log(root);
