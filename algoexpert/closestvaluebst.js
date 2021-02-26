// recursive implementation 0(log(n)) runtime with 0(log(n)) space
function findClosestValueInBst(tree, target) {
    let closest = tree.value
    const bst = (tree, target, closest) => {
        if (!tree) {
            return closest
        }
        if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
            closest = tree.value
        }
        if (target < tree.value) {
            return bst(tree.left, target, closest)
        }
        else if (target > tree.value) {
            return bst(tree.right, target, closest)
        }
        else {
            return closest
        }
    }
    return bst(tree, target, closest)

}

//iterative implementation 0(1) space
function findClosestValueInBst(tree, target) {
    let current = tree
    let closest = tree.value
    while (current) {
        if (Math.abs(current.value - target) < Math.abs(target - closest)) {
            closest = current.value
        }
        if (target > current.value) {
            current = current.right
        }
        else if (target < current.value) {
            current = current.left
        }
        else {
            return closest
        }
    }
    return closest
}