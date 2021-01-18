import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollections'

// const numbersCollection = new NumbersCollection([10, 3, -35, 110])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection)

const charactersCollection = new CharactersCollection(`AxggEFSfse`)
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)