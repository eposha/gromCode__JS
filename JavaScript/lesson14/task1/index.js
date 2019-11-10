let message;
export const sendMessage = name => {
    console.log(`${name}, ${message}`);
};


export const setMessage = text => {
    return message = text;
};

// setMessage('Good job! Your Gromcode');

// sendMessage('Ann');