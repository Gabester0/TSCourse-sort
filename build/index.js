"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollections_1 = require("./CharactersCollections");
var LinkedLists_1 = require("./LinkedLists");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -35, 110]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollections_1.CharactersCollection("AxggEFSfse");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedLists_1.LinkedList();
linkedList.add(4502);
linkedList.add(-345);
linkedList.add(25);
linkedList.add(-34);
linkedList.add(4503);
linkedList.sort();
linkedList.print();
