//Implement the UndergroundSystem class:
//void checkIn(int id, string stationName, int t)
//A customer with a card id equal to id, gets in the station stationName at time t.
//A customer can only be checked into one place at a time.
//void checkOut(int id, string stationName, int t)
//A customer with a card id equal to id, gets out from the station stationName at time t.
//double getAverageTime(string startStation, string endStation)
//Returns the average time to travel between the startStation and the endStation.
//The average time is computed from all the previous traveling from startStation to endStation that happened directly.
//Call to getAverageTime is always valid.
//You can assume all calls to checkIn and checkOut methods are consistent.
//If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1.All events happen in chronological order.

var UndergroundSystem = function () {
    this.trips = new Map();
    this.timeBetweenStations = new Map();
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    if (!this.trips.has(id)) {
        this.trips.set(id, { stationName: stationName, t: t })
    }
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    let trip = this.trips.get(id)
    if (!trip) {
        return null;
    }
    let route = `${trip.stationName} - ${stationName}`
    let duration = t - trip.t
    if (this.timeBetweenStations.has(route)) {
        this.timeBetweenStations.set(route, {
            total: this.timeBetweenStations.get(route).total + duration,
            count: this.timeBetweenStations.get(route).count + 1
        })
    }
    else {
        this.timeBetweenStations.set(route, {
            total: duration,
            count: 1
        })
    }
};

UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let route = `${startStation} - ${endStation}`
    let roundTrip = this.timeBetweenStations.has(route)
    if (roundTrip) {
        let roundTripReal = this.timeBetweenStations.get(route)
        return roundTripReal.total / roundTripReal.count
    }
    return null;
};