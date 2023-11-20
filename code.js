function depthFirstSearch(graph, startNode, targetNode) {
    const visited = []; 
    const path = []; 

    if (startNode == targetNode)
    {
        path.push(startNode); 
        return path; 
    }
    if (visited.length >= graph.length)
    {
        return "No path found"; 
    }

    visited[startNode] = true; 

    for (var i = 0; i < graph[startNode].length; i++)
    {
        vertex = graph[startNode][i]; 
        if (visited[vertex] != true)
        {
            visited.push(vertex); 
            path.push(vertex); 
            depthFirstSearch(graph, vertex, targetNode); 
        }
    }
    path = [path[0]]; 
}
