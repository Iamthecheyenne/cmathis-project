function terrain(name,imageUrl){
    this.name = name;
    this.imageUrl = imageUrl;
}

var terrainList = [
    new terrain("Forest", "Ocean.jpeg");
    new terrain("Desert", "Desert.jpeg");
    new terrain("Valley", "Valley.jpeg");
    new terrain("Mountains", "Mountains.jpeg");

]
exports.getAllTerrains = function() {
    return allTerrains;
}