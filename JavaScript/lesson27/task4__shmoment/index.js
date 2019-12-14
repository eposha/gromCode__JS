const shmoment = initValue => {
    let result = initValue;
    const calculator = {
        add(time, value) {
            let objTimes = {
                milliseconds: (value) => result.setmilliseconds(result.getmilliseconds() + value),
                seconds: (value) => result.setSeconds(result.getSeconds() + value),
                minutes: (value) => result.setMinutes(result.getMinutes() + value),
                hours: (value) => result.setHours(result.getHours() + value),
                days: (value) => result.setDate(result.getDate() + value),
                months: (value) => result.setMonth(result.getMonth() + value),
                years: (value) => result.setFullYear(result.getFullYear() + value),
            }
            result = new Date(objTimes[time](value));
            return calculator;
        },
        subtract(time, value) {
            let objTimes = {
                milliseconds: (value) => result.setMilliseconds(result.getMilliseconds() - value),
                seconds: (value) => result.setSeconds(result.getSeconds() - value),
                minutes: (value) => result.setMinutes(result.getMinutes() - value),
                hours: (value) => result.setHours(result.getHours() - value),
                days: (value) => result.setDate(result.getDate() - value),
                months: (value) => result.setMonth(result.getMonth() - value),
                years: (value) => result.setFullYear(result.getFullYear() - value),
            }
            result = new Date(objTimes[time](value));
            return calculator;
        },
        result() {
            return result;
        },
    };

    return calculator;
};

// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result());

export { shmoment };