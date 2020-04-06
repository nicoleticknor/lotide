const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const expected = "Lighthouse,Labs";
console.log(assertEqual(tail(words), expected));
