localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue; //next check correct value in object
            try {
                newValue = JSON.parse(value);
            } catch (e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]: newValue,
            };
        }, {});
}

export { getLocalStorageData };