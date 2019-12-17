const servers = [
    'https://server.com.us',
    'https://server.com.eu',
    'https://server.com.au'
];

const request = url => new Promise(resolve => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                userData: {
                    name: 'Tom',
                    age: 17,
                },
                source: url,
            })
        }, (1000 + Math.random() * (3000 - 1000)));
    })
});

const getUserASAP = userId => {
    const userUrls = servers
        .map(serverUrl => `${serverUrl}/${userId}`);

    const requests = userUrls
        .map(userUrl => request(userUrl));

    return Promise.race(requests);
}

export { getUserASAP };

// getUserASAP('user-id-1')
//     .then(result => console.log(result));