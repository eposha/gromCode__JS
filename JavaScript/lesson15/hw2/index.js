export const createLogger = () => {

    const result = [];

    const warn = text => {
        result.push({
            message: text,
            dateTime: new Date(),
            type: 'warn',

        })
    };

    const error = text => {
        result.push({
            message: text,
            dateTime: new Date(),
            type: 'error',

        })
    };

    const log = text => {
        result.push({
            message: text,
            dateTime: new Date(),
            type: 'log',

        })
    };

    const getRecords = (type) => {

        if (type == undefined) {
            return result.sort((a, b) => b.dateTime - a.dateTime);
        } else {
            return result.filter(i => i.type == type)
        }
    }

    return {
        warn,
        error,
        log,
        getRecords,
    }
};


// const log1 = createLogger();
// // console.log(log1);
// log1.warn('Are you Andrei?');
// log1.error('Oops, we think that you are not Andrei');
// log1.log('Sorry, we made a mistake, YOU are ANDREI!!!');
// console.log(log1.getRecords('warn'));


// const log2 = createLogger();
// // console.log(log1);
// log2.warn('Are you Ivan?');
// log2.error('Ok, we will check it');
// log2.log('Sorry, we checked your information, YOU are not Ivan!!!');
// console.log(log2.getRecords('warn'));


// console.log(log1.getRecords('warn'));