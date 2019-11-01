function square(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= num;
    }
    return result;
}

console.log(square(3));