//In a binary tree, a lonely node is a node that is the only child of its parent node.
//The root of the tree is not lonely because it does not have a parent node.
//Given the root of a binary tree,
// return an array containing the values of all lonely nodes in the tree.
//Return the list in any order.


var getLonelyNodes = function (root) {
    const res = [];
    const dfs = (node, lonely) => {
        if (!node) return;
        if (lonely) res.push(node.val);
        dfs(node.left, node.right === null);
        dfs(node.right, node.left === null);
    }
    dfs(root, false);
    return res;
};