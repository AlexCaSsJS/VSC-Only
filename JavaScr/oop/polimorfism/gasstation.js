
class Basestation {
    fillCar() { }
}

class ShellStation extends Basestation {
    fillCar() {
        console.log('Filling car with shell diesel.');
    }
}

class FakeStation extends Basestation {
    fillCar() {
        console.log('Filling car with water.');
    }
}

class Driver {
    /**
     * 
     * @param {BaseStation} gasStation 
     */
    goToClosestStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var fakeStation = new FakeStation();

var alex = new Driver();
alex.goToClosestStation(fakeStation);

// myStation.fillCar();
// fakeStation.fillCar();