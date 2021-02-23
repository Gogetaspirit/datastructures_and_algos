//A matrix diagonal is a diagonal line of cells starting from some cell 
//in either the topmost row or leftmost column and going in the bottom - right direction 
//until reaching the matrix's end. 
//For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix,
// includes cells mat[2][0], mat[3][1], and mat[4][2].
//Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order 
//and return the resulting matrix.

var diagonalSort = function (mat) {
    let map = new Map();
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (map.has(i - j)) {
                map.get(i - j).push(mat[i][j])
            }
            else {
                map.set(i - j, [mat[i][j]])
            }
        }
    }
    for (let [key, val] of map.entries()) {
        val.sort((a, b) => {
            return a - b
        })
    }
    for (let k = 0; k < mat.length; k++) {
        for (let m = 0; m < mat[k].length; m++) {
            mat[k][m] = map.get(k - m).shift()
        }
    }
    return mat
};