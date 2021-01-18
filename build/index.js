"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollections_1 = require("./CharactersCollections");
// const numbersCollection = new NumbersCollection([10, 3, -35, 110])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)
var charactersCollection = new CharactersCollections_1.CharactersCollection("AxggEFSfse");
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
