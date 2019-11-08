import { compareSums } from './index';

it('if sum of interval arg1 and arg2  bigger then sum of interval arg3 and arg4 should be true', () => {
    const result = compareSums(0, 6, 7, 8);

    expect(result).toEqual(true);

});



it('arg1 should be bigger arg2 ', () => {


});