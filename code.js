function depthFirstSearch(graph, startNode, targetNode) {
    const visited = []; 
    const path = []; 

    // Base cases 
    if (graph.length == 0)
    {
        return "No graph to search"; 
    }
    if (graph.length == 1 && startNode != targetNode)
    {
        return "No path to desired node"; 
    }

    // Start Search
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
            path.push(vertex); 
            depthFirstSearch(graph, vertex, targetNode); 
        }
    }
    path = [path[0]]; 
}