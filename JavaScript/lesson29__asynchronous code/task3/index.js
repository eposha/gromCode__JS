const main = () => {
    console.log('1');
    setTimeout(() => console.log('2'), 0);
    console.log('3');
    setTimeout(() => console.log('4'), 1000);
    console.log('5');
};

main();