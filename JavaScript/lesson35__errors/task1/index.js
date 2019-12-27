window.addEventListener('error', function onUnhandkedError(e) {
    console.log(e);
})

try {
    const jsonString = '{"name":"Tom"';
    throw new ReferenceError();
    const userData = JSON.parse(jsonString);
    console.log(userData);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.error('Handled');
    } else {
        throw err;
    }
} finally {
    console.log('Some actions');
};


// console.log('I am alive');