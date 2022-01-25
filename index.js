// [START app]
import express from 'express';
import { createRequire } from 'module';

import Graph from 'dot-quiver/data-structures/graph/Graph.js';
import { createVertices } from 'dot-quiver/data-structures/graph/GraphVertex.js';
import { createEdges } from 'dot-quiver/data-structures/graph/GraphEdge.js';

const require = createRequire(import.meta.url);
const app = express();

// [START enable_parser]
// This middleware is available in Express v4.16.0 onwards
app.use(express.json({ extended: true }));
// [END enable_parser]

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get('/', (req, res) => {
  // Driver program
  // Create a sample graph

  // A directed graph
  const graph_ = new Graph(true);

  // Nodes
  const node_labels = ['A', 'B', 'C', 'D', 'E', 'F'];
  const [A, B, C, D, E, F] = createVertices(node_labels);

  // Vertices
  const edge_vertices = [[A, B], [B, C], [C, D], [C, E], [E, B], [C, F], [F, B]];

  // Add edges
  graph_.addEdges(createEdges(edge_vertices));

  res.send(graph_.describe());
});
// [END app]
