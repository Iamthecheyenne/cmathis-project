function gameData() {
    var terrain = require('../Models/terrain');
    var weather = require('../Models/weather');
    var pace = require('../Models/pace');

    this.playerNames = "";
    this.playerStatus =[true,true,true,true,true];
    this.playerProfession = "";
    this.playerMoney = 100;
    this.startMonth = "January";
    this.milesTraveled = 0;
    this.groupHealth = 100;
    this.currentPace ={};
    this.daysOnTrail = 0;
    this.currentWeather ={};
    this.currentTerrain ={};
    this.messages = [];
}
