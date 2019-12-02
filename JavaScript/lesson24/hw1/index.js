  const millSecPerMinute = 60 * 1000;
  const millSecPerHour = 60 * millSecPerMinute;
  const millSecPerDay = 24 * millSecPerHour;

  function getDiff(startDate, endDate) {
      const diffMs = Math.abs(endDate - startDate);
      const countDays = Math.trunc(diffMs / millSecPerDay);
      const countDaysInMs = countDays * millSecPerDay;

      const restOfDayInMs = diffMs - countDaysInMs;

      const countHours = Math.trunc((restOfDayInMs) / millSecPerHour);
      const restOfHourInMs = restOfDayInMs - (countHours * millSecPerHour);

      const countMinutes = Math.trunc((restOfHourInMs) / millSecPerMinute);
      const countSeconds = Math.trunc((restOfHourInMs - (countMinutes * millSecPerMinute)) / 1000);

      return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
  }

  export { getDiff };