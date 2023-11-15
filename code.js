function depthFirstSearch(graph, startNode, targetNode) {
    const visited = []; 
    const path = []; 

    while (visited.length < graph.length)
    {
        if (startNode == targetNode)
        {
            path.push(startNode); 
            return path; 
        }

        else 
        {
            visited.push(startNode)
            
            for (var i = 0; i < graph.length; i++)
            {
                var row = graph[i]; 
                depthFirstSearch(row, row[i], targetNode); 
            }
        }
    }
    return [];
}
