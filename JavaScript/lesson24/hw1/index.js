const getDiff = (startDate, endDate) => {
    const startDateDays = new Date(startDate).getDay();
    const startDateHours = new Date(startDate).getHours();
    const startDateMinutes = new Date(startDate).getMinutes();
    const startDateSecond = new Date(startDate).getSeconds();

    const endDateDays = new Date(endDate).getDay();
    const endDateHours = new Date(endDate).getHours();
    const endDateMinutes = new Date(endDate).getMinutes();
    const endDateSecond = new Date(endDate).getSeconds();

    return `${Math.abs(startDateDays - endDateDays)}d ${Math.abs(startDateHours - endDateHours)}h ${Math.abs(startDateMinutes - endDateMinutes)}m ${Math.abs(startDateSecond - endDateSecond)}s`
};


// console.log(getDiff(new Date(2012, 11, 10, 10), new Date(2011, 11)));

export { getDiff };