import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]){
        // The super call calls the constructor function of
        // the parent class.  We are extending the parent class
        // (thus relying on inheritance from the parent)
        // so if there is important functionality that has to be
        // instantiated by calling the constructor of the original
        // class we will call super to run the parent classes constructor
        super();
    }

    get length(): number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number):void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}