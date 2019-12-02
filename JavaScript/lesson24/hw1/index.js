const getDiff = (startDate, endDate) => {
    const startDateDays = new Date(startDate).getUTCDay();
    const startDateHours = new Date(startDate).getUTCHours();
    const startDateMinutes = new Date(startDate).getUTCMinutes();
    const startDateSecond = new Date(startDate).getUTCSeconds();

    const endDateDays = new Date(endDate).getUTCDay();
    const endDateHours = new Date(endDate).getUTCHours();
    const endDateMinutes = new Date(endDate).getUTCMinutes();
    const endDateSecond = new Date(endDate).getUTCSeconds();

    return `${Math.abs(startDateDays - endDateDays)}d ${Math.abs(startDateHours - endDateHours)}h ${Math.abs(startDateMinutes - endDateMinutes)}m ${Math.abs(startDateSecond - endDateSecond)}s`
};


// console.log(getDiff(new Date(2012, 11, 10, 10), new Date(2011, 11)));

export { getDiff };