export function compareSums(a, b, c, d) {
    function sum(from, to) {
        let result = 0;
        for (let i = from; i <= to; i++) {
            result += i;
        }
        return result;
    }

    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

console.log(compareSums(5, 6, 7, 8))