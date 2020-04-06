const assertEqual = require('../assertEqual');

const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2,6,7]), 5);
assertEqual(head(["Goodbye", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Goodbye"]), "Hello");
assertEqual(head(["Hello"]), "Hello");