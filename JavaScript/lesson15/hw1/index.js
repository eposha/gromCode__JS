let result = 0;

const add = num => {
    result += num;
}

const decrease = num => {
    result -= num;
}

const reset = () => {
    result = 0;
}

const getMemo = () => {
    return result;
}

export { add, decrease, reset, getMemo };