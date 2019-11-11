const createLogger = () => {

    const result = [];

    const warn = text => {
        result.push({
            message: text,
            dateTime: newDate(),
            type: text,

        })
    }
    const warn = text => {
        result.push({
            message: text,
            dateTime: newDate(),
            type: text,

        })
    }

    const error = text => {
        errorText = text;
    }

    const log = text => {
        logText = text;
    }

    const getRecords = () => {
        // if ()
    }
}