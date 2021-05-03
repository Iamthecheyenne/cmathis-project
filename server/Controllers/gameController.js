var terrain = require('../Models/terrain');
var weather = require('../Models/weather');
var pace = require('../Models/pace');
var gameData = require('../Models/gameData');


exports.getGameData = function(req,res){
    // return json of the game data
    res.setHeader('Content=Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin',"");
    res.send(gameData);
}