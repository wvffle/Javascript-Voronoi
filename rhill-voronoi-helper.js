// Return a list of the neighbors
Voronoi.prototype.Cell.prototype.getNeighbors = function(voronoi) {
    var neighbors = this.getNeighborIds().map(function(id) {
            return voronoi.cells[id];
        });
    return neighbors;
    };
