// counter

export const makeCounter = () => {
    let count = 0;
    return function() {
        return count++;
    }
}

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// console.log(counter2());
// console.log(counter2());