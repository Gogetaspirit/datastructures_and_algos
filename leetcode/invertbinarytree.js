//Invert a binary tree.
var invertTree = function (root) {
    if (root === null) return null;
    let right = invertTree(root.right)
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root
};






