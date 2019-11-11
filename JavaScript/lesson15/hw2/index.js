export const createLogger = () => {

    const result = [];

    return {
        warn: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',

            })
        },

        error: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'error',

            })
        },

        log: text => {
            result.push({
                message: text,
                dateTime: new Date(),
                type: 'log',

            })
        },

        getRecords: type => {
            if (type == undefined) {
                return result.sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return result.filter(i => i.type == type)
            }
        },
    }
};


// const log1 = createLogger();
// console.log(typeof log1.getRecords());
// // console.log(log1);
// log1.warn('Are you Andrei?');
// log1.error('Oops, we think that you are not Andrei');
// log1.log('Sorry, we made a mistake, YOU are ANDREI!!!');
// console.log(log1.getRecords());


// const log2 = createLogger();
// // console.log(log1);
// log2.warn('Are you Ivan?');
// log2.error('Ok, we will check it');
// log2.log('Sorry, we checked your information, YOU are not Ivan!!!');
// console.log(log2.getRecords('warn'));


// console.log(log1.getRecords('warn'));