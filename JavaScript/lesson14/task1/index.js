let message;
export const sendMessage = name => {
    console.log(`${name}, ${message} Your Gromcode`);
};


export const setMessage = text => {
    return message = text;
};

// setMessage('Good job! Your Gromcode');

// sendMessage('Ann');