export const createCalculator = () => {
    let count = 0;

    return {
        add: num => {
            count += num;
        },

        decrease: num => {
            count -= num;
        },

        reset: () => {
            count = 0;
        },
        getMemo: () => {
            return count;
        },
    }
}

// let counter1 = createCalculator();
// count1 = counter1.add(5);
// count1 = counter1.decrease(1);
// count1 = counter1.getDemo();
// console.log(count1);

// let counter2 = createCalculator();
// count2 = counter2.add(8);
// count2 = counter2.decrease(1);
// count2 = counter2.getDemo();
// console.log(count2);