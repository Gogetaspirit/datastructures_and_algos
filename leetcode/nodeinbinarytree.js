//Given two binary trees original and cloned and 
//given a reference to a node target in the original tree.
//The cloned tree is a copy of the original tree.
//Return a reference to the same node in the cloned tree.
//Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.


var getTargetCopy = function (original, cloned, target) {
    const dfs = node => {
        if (node) {
            if (node.val === target.val) return node;
            return dfs(node.left) || dfs(node.right);
        }
        return null;
    }
    return dfs(cloned);
};
