function weather(id,type,healthChallenge,mileChange,probability){
    this.ids = id;
    this.type = type;
    this.healthChange = healthChange;;
    this.mileChange = mileChange;
    this.probability = probability;

}
var weatherList = [
    new weather(0,"Very Hot", -8,0.7,0.1),
    new weather(1,"Hot", -3,0.9,0.1),
    new weather(2,"Warm", 1,1,0.2),
    new weather(3,"Cool", 1,0.95,0.1),
    new weather(4,"Cold", -5,0.8,0.1),
    new weather(5,"Very Cold", -12,0.7,0.1),
    new weather(6,"Rain", -4,0.6,0.1),
    new weather(7,"Heavy Rain", -8,0.4,0.05),
    new weather(8,"Snow", -15,0.3,0.05),
    new weather(9,"Blizzard", -30,0.1,0.05),
    new weather(10,"Heavy Fog", -3,0.5,0.05),
]
exports.getAllWeather = function (){
    return weatherList;
}

