const formater = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});

const getTime = date => formater.format(date);


console.log(getTime(new Date()));