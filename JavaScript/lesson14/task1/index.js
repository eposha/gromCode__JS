let message;
const sendMessage = name => {
    console.log(`${name}, ${message}`);
};


const setMessage = text => {
    return message = text;
};

setMessage('Good job! Your Gromcode');

sendMessage('Ann');