const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const endDate = new Date(Date.UTC(2019, 5, 22, 17, 52, 18));

const getDiff = (startDate, endDate) => {
    const startDateDays = new Date(startDate).getUTCDay();
    const startDateHours = new Date(startDate).getUTCHours();
    const startDateMinutes = new Date(startDate).getUTCMinutes();
    const startDateSecond = new Date(startDate).getUTCSeconds();

    const endDateDays = new Date(endDate).getUTCDay();
    const endDateHours = new Date(endDate).getUTCHours();
    const endDateMinutes = new Date(endDate).getUTCMinutes();
    const endDateSecond = new Date(endDate).getUTCSeconds();

    return `${Math.abs(endDateDays - startDateDays)}d ${Math.abs(endDateHours - startDateHours)}h ${Math.abs(endDateMinutes - startDateMinutes)}m ${Math.abs(endDateSecond - startDateSecond)}s`
};


// console.log(getDiff(startDate, endDate));

export { getDiff };