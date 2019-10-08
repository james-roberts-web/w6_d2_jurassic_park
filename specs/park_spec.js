const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;

  beforeEach(function () {
    park = new Park('Billy and the Cloneasaurus', 100);
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 500);
    dinosaur2 = new Dinosaur('Velocoraptor', 'carnivore', 400);
    dinosaur3 = new Dinosaur('Triceratops', 'herbivore', 250);
    dinosaur4 = new Dinosaur('Brachiosaurus', 'herbivore', 300);
    dinosaur5 = new Dinosaur('Stegosaurus', 'herbivore', 200);
    dinosaur6 = new Dinosaur('Bird', 'omnivore', 10);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Billy and the Cloneasaurus');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual( park.collectionOfDinosaurs, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    const expected = 1660;
    assert.deepStrictEqual(park.calculateVisitsOfDinosaursByDay(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    const expected = 605900;
    assert.deepStrictEqual(park.calculateVisitsOfDinosaursByYear(), expected);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    const expected = 60590000;
    assert.deepStrictEqual(park.calculateAnnualRevenue(), expected);
  });

});
