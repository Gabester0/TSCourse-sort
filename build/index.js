"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -35, 110]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
