const getGreenwichTime = (date) => {
    const minute = date.getMinutes();
    const hours = date.getHours();
    const result = `${hours}:${minute}`;

    return result;
};

// console.log(getGreenwichTime(new Date()));



// const weekDay = ['Sun', 'Monday', 'Thuesday', 'Wednesday'];

// const getDayOfWeek = (date, days) => {
//     const day = new Date(date).getDate();
//     const dateInFuture = new Date(date).setDate(day + days);

//     return weekDay[new Date(dateInFuture).getDay()];
// };

// console.log(getDayOfWeek(new Date(2019, 0, 1), 14));