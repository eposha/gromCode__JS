export default function createMessenger(name, text, sender) {
    const sendMessage = name => {
        let names = name;
        return names;
    };

    const setMessage = text => {
        let texts = text;
        return texts;
    };

    const setSender = sender => {
        let senders = sender;
        return senders;
    };

    console.log(`${sendMessage(name)}, ${setMessage(text)} ${setSender(sender)}`)
};


createMessenger('Ann', 'Just learn it!', 'Your Gromcode');