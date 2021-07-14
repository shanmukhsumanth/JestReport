import { add } from './index';

// add test suit
describe( 'add() tests', () => {
    // test addition of two numbers
    test( 'add(1,2) to be 3', () => {
        expect( add(1, 2) ).toBe(3);
    } );
} );
