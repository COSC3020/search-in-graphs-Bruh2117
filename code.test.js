import {depthFirstSearch} from './code.js'; 
var graph = 
[
    [1, 3], 
    [0, 2, 4],
    [2],
    [0, 4],
    [1, 3, 5],
    [4]
]

return depthFirstSearch(graph, 0, 5);