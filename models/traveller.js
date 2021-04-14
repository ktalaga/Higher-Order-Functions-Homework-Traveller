const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const locationsList = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return locationsList;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const locationsList = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return locationsList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
