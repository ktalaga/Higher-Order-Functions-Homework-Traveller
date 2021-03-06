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
  const journeysByDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return journeysByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const getTotalDistance = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
  return getTotalDistance;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let getModesOfTransport = this.journeys.map((journey) => {
//     return journey.transport
//   })
//   function removeDuplicates(ListOfTransport){
//     return ListOfTransport.filter((value, index) => {
//       ListOfTransport.indexOf(value) === index;
//     })
//   }
//   return removeDuplicates(getModesOfTransport);
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  let getModesOfTransport = this.journeys.map((journey) => {
    return journey.transport
  })
  const uniqueModesOfTransport = [...new Set(getModesOfTransport)];
  return uniqueModesOfTransport;
};


module.exports = Traveller;
