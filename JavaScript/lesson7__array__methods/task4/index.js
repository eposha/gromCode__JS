function swap(arr) {
    const [start, ...rest] = arr;

    return [...rest, start];
}