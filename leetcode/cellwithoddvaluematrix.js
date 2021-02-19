//Given n and m which are the dimensions of a matrix initialized by zeros and given an array 
//indices where indices[i] = [ri, ci].For each pair of[ri, ci] 
//you have to increment all cells in row ri and column ci by 1.
//Return the number of cells with odd values in the matrix after applying the increment to all indices.

//Example 1:

//Input: n = 2, m = 3, indices = [[0, 1], [1, 1]]
//Output: 6
//Explanation: Initial matrix = [[0, 0, 0], [0, 0, 0]].
//After applying first increment it becomes[[1, 2, 1], [0, 1, 0]].
//The final matrix will be[[1, 3, 1], [1, 3, 1]] which contains 6 odd numbers.

var oddCells = function (n, m, indices) {
    let matrix = []
    let output = 0;

    for (let i = 0; i < n; i++) {
        matrix.push([])
    }
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < m; k++) {
            matrix[j].push(0)
        }
    }

    for (let l = 0; l < indices.length; l++) {
        let x = indices[l][0];
        let y = indices[l][1];
        for (let m = 0; m < matrix[x].length; m++) {
            matrix[x][m] = matrix[x][m] + 1;
        }

        for (let n = 0; n < matrix.length; n++) {
            matrix[n][y] = matrix[n][y] + 1;
        }
    }

    for (let o = 0; o < matrix.length; o++) {
        for (let p = 0; p < matrix[o].length; p++) {
            if (matrix[o][p] % 2 !== 0 && matrix[o][p] !== 0) {
                output++;
            }
        }
    }
    return output;
};