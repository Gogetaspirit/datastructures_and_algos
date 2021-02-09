//Number of Connected Components in an Undirected Graph

//Given n nodes labeled from 0 to n - 1 and a list of undirected edges(each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.
  //  Example 1:
//Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]
//    0          3
//    |          |
//    1 -- - 2   4
//Output: 2


var countComponents = function (n, edges) {
    var count = 0;
    var isVisited = [];
    var graph = [];
    for (var j = 0; j < n; ++j) {
        isVisited.push(false);
        graph.push([]);
    }
    for (j = 0; j < edges.length; ++j) {
        var one = edges[j][0];
        var two = edges[j][1];
        graph[one].push(two);
        graph[two].push(one);
    }
    for (var i = 0; i < n; ++i) {
        if (isVisited[i]) continue;
        dfs(i, isVisited, graph);
        count++;
    }
    return count;
};
function dfs(node, isVisited, graph) {
    isVisited[node] = true;
    var nodes = graph[node];
    for (var i = 0; i < nodes.length; ++i) {
        if (isVisited[nodes[i]]) continue;
        dfs(nodes[i], isVisited, graph);
    }
};






