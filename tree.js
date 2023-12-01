/** TreeNode: node for a general tree. */


class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0;
    const toSumStack = [this.root]; 
    let sum = 0;
    while(toSumStack.length) {
      const current = toSumStack.pop(); 
      sum += current.val; 
      for(let child of current.children) {
        toSumStack.push(child);
      }
    }
    
    return sum; 
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;
    const toCountStack = [this.root]; 
    let count = 0;
    while(toCountStack.length) {
      const current = toCountStack.pop(); 
      if(current.val % 2 === 0) {
        count += 1; 
      }
      for(let child of current.children) {
        toCountStack.push(child);
      }
    }
    
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    const toCountStack = [this.root]; 
    let count = 0;
    while(toCountStack.length) {
      const current = toCountStack.pop(); 
      if(current.val > lowerBound) {
        count += 1; 
      }
      for(let child of current.children) {
        toCountStack.push(child);
      }
    }
    
    return count;
  }
}

emptyTree = new Tree();
// let test = emptyTree.root; 
// console.log("test:", test)
// let result1 = emptyTree.sumValues();
// console.log("result1:", result1)



// build small tree
let nSmall = new TreeNode(1);
let nSmall2 = new TreeNode(2);
nSmall.children.push(nSmall2);
smallTree = new Tree(nSmall);

// let result2 = smallTree.sumValues();
// console.log("result2:", result2)

// let result3 = smallTree.countEvens();
// console.log("result3:", result3)

let result4 = smallTree.numGreater(0);
console.log("result4:", result4)

module.exports = { Tree, TreeNode };
