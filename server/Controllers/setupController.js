var gameData = require('../Models/gameData');

exports.saveStartMonth = fucntion(req,res){
    gameController.getData().startMonth = req.body.month;
    res.setHeader('Content-Type', 'text/plain');
    res.send(gameController.getData().startMonth);
};