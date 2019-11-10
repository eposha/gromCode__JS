export default function createMessenger() {
    let message = 'Just learn it!';
    let sender = 'Gromcode';

    const sendMessage = name => {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    const setMessage = text => {
        message = text;
    }

    const setSender = text => {
        sender = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}



// export default function createMessenger(name, text, sender) {
//     const sendMessage = name => {
//         let names = name;
//         return names;
//     };

//     const setMessage = text => {
//         let texts = text;
//         return texts;
//     };

//     const setSender = sender => {
//         let senders = sender;
//         return senders;
//     };

//     console.log(`${sendMessage(name)}, ${setMessage(text)} ${setSender(sender)}`)
// };


// createMessenger('Ann', 'Just learn it!', 'Your Gromcode');