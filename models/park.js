const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function (newDinosaur) {
  this.collectionOfDinosaurs.push(newDinosaur);
};

Park.prototype.removeDinosaur = function (oldDinosaur) {
  this.collectionOfDinosaurs.pop(oldDinosaur);
}

Park.prototype.calculateVisitsOfDinosaursByDay = function () {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.calculateVisitsOfDinosaursByYear = function () {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total*365;
};

Park.prototype.calculateAnnualRevenue = function () {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total*365*this.ticketPrice;
};


module.exports = Park;
