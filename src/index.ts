import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollections'
import { LinkedList } from './LinkedLists';

const numbersCollection = new NumbersCollection([10, 3, -35, 110])
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection(`AxggEFSfse`)
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(4502);
linkedList.add(-345);
linkedList.add(25);
linkedList.add(-34);
linkedList.add(4503);

linkedList.sort();
linkedList.print();