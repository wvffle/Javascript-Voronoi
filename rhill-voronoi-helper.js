// Return a list of the neighbors
Voronoi.prototype.Cell.prototype.getNeighbors = function(voronoi) {
    var neighbors = this.getNeighborIds().map(function(id) {
            return voronoi.cells[id];
        });
    return neighbors;
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
