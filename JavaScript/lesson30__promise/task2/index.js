const delayPromise = delay => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Done'));
        }, delay);
    });
    return p;
};

const delay = time => {
    return delayPromise(time);
};

export { delay };