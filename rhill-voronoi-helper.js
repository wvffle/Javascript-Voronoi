// Return a list of the neighbors
Voronoi.prototype.Cell.prototype.getNeighbors = function(voronoi) {
    var neighbors = this.getNeighborIds().map(function(id) {
            return voronoi.cells[id];
        });
    return neighbors;
    };

//Return a list of vertices
Voronoi.prototype.Cell.prototype.getVertices = function() {
    var vertices = [];
    for (var i in this.halfedges) {
        vertices.push(this.halfedges[i].getStartpoint());
        }
    return vertices;
    };

//Return cells that are touching the edges of the map
Voronoi.prototype.Diagram.prototype.getBorderCells = function() {
    edgeCells = [];
    for (var i in this.cells) {
        var cell = this.cells[i];
        if (cell.isBorderCell()) {
            edgeCells.push(cell);
            }
        }
    return edgeCells;
    };
