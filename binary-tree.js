/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // * I dont think this is right you will have to come back and look at it 
  // * you were using teh principal that they would be added left to right which is not true
  // minDepth() {
  //   if(this.root === null) return 0; 
  //   let minDepth = 0;

  //   function findMinDepth(node) {
  //     // if(node.left === null && node.right === null) return 1; 
      
  //       // that means there is a right node but not a left node 
  //     if(node.left === null || node.right === null) {
  //       console.log("first if statement is running")
  //       return minDepth += 1; 
  //     }
  //     // returning one if there are only no children because you have to account for the this.root node
  //     if(node.left && node.right) {
  //       console.log("second if statement is running")
  //       minDepth += 1; 
  //       console.log("minDepth:", minDepth)
  //       // return Math.min(findMinDepth(node.right), findMinDepth(node.left))
  //     } 
   
  //   }

  //   return findMinDepth(this.root)

  // }

    minDepth() {
    if (!this.root) return 0;

    function findMinDepth(node) {
      // * this returns a number one or if we already have a number it will return number + 1; 
      if (!node.left || !node.right) return + 1;
      return (
        // * this is representing two nums and taking the smaller but we are adding one to the smaller num
        Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1
      );
    }

    // * initially calls the findMinDepth funct
    return findMinDepth(this.root);
  }

//                BINARY TREE 
//                   1
//               /     \
//              2         3
//          /       \
//         4        5

// findMinDepth gets called on 1 which is the root 
// if there either node.left or node.right doesnt exist we return 1 
//  we have both node.left (2) and node.right (3) so we move one. 
// return by recursively calling findMinDepth(2) and findMinDepth(3)
//        start with findMinDepth(2) --> 
//            2 has both left and right nodes so it will also recurisively call them 
//                findMinDepth(4) returns 1
//               findMinDepth(5) returns 1 
//         findMinDepth(2) returns 1 + 1 = 2
//         findMinDepth(3) returns 1; 
//  the we compare Math.min(2, 1) and then we add 1 to it which will be 2;


// minDepth() {
  //   if (!this.root) return 0;

  //   function minDepthHelper(node) {
  //     // * if no left or right return one because of this.root 
  //     if (node.left === null && node.right === null) return 1;
  //     // * if no left then we are going right 
  //     // ! this doesn't make sense to me because if we have no left we should just be returning I think
  //     // if (node.left === null) return minDepthHelper(node.right) + 1;
  //     if (node.left === null || node.right === null) return + 1;
  //     // if (node.right === null) return minDepthHelper(node.left) + 1;
  //     // if (node.right === null) return + 1;
  //     return (
  //       // * this is representing two nums and taking the smaller but we are adding one to the smaller num
  //       Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1

  //     );
  //   }

  //   return minDepthHelper(this.root);
  // }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // * if you use a depth first search and count then you can compare each branch 

  maxDepth() {
    if (!this.root) return 0;
    let maxDepth = 0; 

    function findMaxDepth(node) {
      
      // this is how we get out of the recursive loop.
      if (node.left === null && node.right === null) {
        return maxDepth += 1;
       }
      //  taking longest route by going to the right if left is null
      if (node.left === null) { 
        maxDepth += 1; 
        return findMaxDepth(node.right) ;
      }
      if (node.right === null) {
        maxDepth += 1; 
        return findMaxDepth(node.left);
      }
      return (
        Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) 
      );
    }

    return findMaxDepth(this.root);
  }

//                BINARY TREE 
//                   1
//               /     \
//              2         3
//          /       \
//         4        5

//        findMaxDepth(1) is called 
//        1 has both left and right so moves on 
//        we call Math.max( findMaxDepth(2), indMaxDepth(3)) + 1
//              findMaxDepth(2) 
//                    which calls Math.max( findMaxDepth(4), indMaxDepth(5)) + 1
//                             findMaxDepth(4) maxMax+= 1 === 0 +1 = 1
//                              findMaxDepth(4) maxMax+= 1 === 0 +1 = 1
//                  findMaxDepth(2) = 2
//              findMaxDepth(3) = 0 + 1 = 1 
//         Math.max(2, 1) = 3 so three is the answer
// 
// 

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  // needs to be recursive, we need to be comparing like we were in findMaxDepth
  // need to be able to check path and ones visted so having a stack would be good. 
    //                BINARY TREE 
//                   6
//               /     \
//              4        5
//          /       \
//  this should return 15 

maxSum() {

  let sum = 0; 

  function findSum(node) {
    if(!node) return 0;
    let left = findSum(node.left);
    let right = findSum(node.right);


    sum = Math.max(sum, left + right + node.val)
    console.log("sum:", sum)
    
    return Math.max(left, right) + node.val;
  }
  findSum(this.root);

  return sum
}

//                BINARY TREE 
//                   6
//               /     \
//              4        5
//          /       \
//        3         2

// findsum(6)
//    findSum(4)
//        findSum(3)
//             sum = Mat.max(sum (0), 0) + 3 = 3
//        findSum(2) 
//            sum = Math.max(0, 0) + 2 = 2
//       Math.max(0, 3 + 2) + 4 = 9
//    findSum(5)
//        Math.max(0, 0) + 5 = 5

// findSum(6) Math.max(9, 5) + 6 = 15 
//
//


  // maxSum() {
  //   if(!this.root) return 0; 
  //   let sum = 0; 
  //   let visitedStack = [this];

  //   function findMaxDepth(node) {

  //     if (node.left === null && node.right === null) return + node.val; 

  //     if (node.left === null) {
  //       visitedStack.push(node.right)
  //       return findMaxDepth(node.right);
  //     }
  //     if (node.right === null) {
  //       visitedStack.push(node.left)
  //       return findMaxDepth(node.left); 
  //     }
      
  //     // return (
  //     //   Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + node.val
  //     // );
  //   }
  //   return findMaxDepth(this.root);
  // }




  // * this would be correct if we had to start at the top node. Great example of why this wont work
  // * also good example of not jumping at first thought
  // maxSum() {
  //   if(!this.root) return 0; 

  //   function findMaxDepth(node) {

  //     if (node.left === null && node.right === null) return + node.val; 
  //     if (node.left === null) return findMaxDepth(node.right) + node.right.val;
  //     if (node.right === null) return findMaxDepth(node.left) + node.left.val; 
      
  //     return (
  //       Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + node.val
  //     );
  //   }
  //   return findMaxDepth(this.root);
  // }

  //                BINARY TREE 
//                   6
//               /     \
//              4        5
//          /       \
//     
//            we have findMaxDepth(6)
//            return Math.max(findMaxDepth(4), findMaxthDepth(5)) 
//                        findMaxDepth(4) = 4; 
//                        findMaxDepth(5) = 5; 
//                5
//
//

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // return the that is the smallest value but still greater than lowerBound
  // go through the values of the tree --> use stack or queue 
  // test to see if 1 val is greater than < lowerBound and 2 value is less than last value 

  nextLarger(lowerBound) {
    let stack = [this.root];
    let retVal; 

    function addToStack(node) {
      if(!node) return 
      stack.push(node)
      addToStack(node.left);
      addToStack(node.right)

      while(stack.length) {
        let currNode = stack.pop();
        if(!retVal) {
          if(currNode.val > lowerBound) {
            retVal = currNode.val;
          }
        } else {
          if(currNode.val > lowerBound && currNode.val < retVal) {
          retVal = currNode.val; 
          }
        }
        continue; 
      }
    }
    addToStack(this.root)
    return retVal || null; 
  }

  // function pushPreOrder(node, stack) {
  //   if (!node) return;
  //   stack.push(node.value);
  //   pushPreOrder(node.left, stack);
  //   pushPreOrder(node.right, stack);
  // }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

// emptyTree = new BinaryTree();
// let result1 = emptyTree.minDepth(); 

// console.log("result1:", result1)

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// let result2 = smallTree.maxDepth(); 
// console.log("result2:", result2)

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

// let result3 = largeTree.maxDepth(); 
// console.log("result3:", result3)

// console.log("!!!", Math.max(3, 3))

// let node100 = new BinaryTreeNode(100);
// let node8 = new BinaryTreeNode(8);
// let nodeNeg4 = new BinaryTreeNode(-4);
// let node2 = new BinaryTreeNode(2, nodeNeg4);
// let nodeNeg3 = new BinaryTreeNode(-3, node8, node100);
// let root = new BinaryTreeNode(10, node2, nodeNeg3);
// let tree = new BinaryTree(root);

// let result4 = tree.maxSum();
// console.log("result4:", result4)

// let result5 = smallTree.maxSum();
// console.log("result5:", result5)

let result6 = smallTree.nextLarger(4); 
console.log("result6:", result6)

let result7 = largeTree.nextLarger(2); 
console.log("result7:", result7)




module.exports = { BinaryTree, BinaryTreeNode };
