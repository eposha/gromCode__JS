// calc(3).add(2).mult(4).div(10).substract(5).result(); // -3

const calc = initValue => {
    let result = initValue;
    const calculator = {
        add(value) {
            result += value;
            return calculator;
        },
        mult(value) {
            result *= value;
            return this;
        },
        substract(value) {
            result -= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result(value) {
            return result;
        },
    };

    return calculator;
};

// const result = calc(3).add(2).mult(4).div(10).substract(5).result();

// console.log(result);