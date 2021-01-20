"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedLists_1 = require("./LinkedLists");
// const numbersCollection = new NumbersCollection([10, 3, -35, 110])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)
// const charactersCollection = new CharactersCollection(`AxggEFSfse`)
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)
var linkedList = new LinkedLists_1.LinkedList();
linkedList.add(4502);
linkedList.add(-345);
linkedList.add(25);
linkedList.add(-34);
linkedList.add(4503);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
