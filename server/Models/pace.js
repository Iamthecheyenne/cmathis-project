function pace(name,miles,healthChange){
    this.name = name;
    this.miles = miles;
    this.healthChange = healthChange;
}

    var paceList = [
        new pace("Steady", 20, 0),
        new pace("Strenous", 30, -3),
        new pace("Greuling", 35, -8),
        new pace("Resting", 0, 5)
    ]
    exports.getAllPaces = function(){

    return (getAllPaces);
    }

    exports.getAllPaces = function (pace){
        if(pace=="Steady"){
        return (getAllPaces(0));

        }
        if(pace=="Strenous") {
        return (getAllPaces(1));
        }
        if(pace=="Greuling") {
        return (getAllPaces(2));

        }
        if(pace=="Resting") {
        return (getAllPaces(3));

        }
    }
