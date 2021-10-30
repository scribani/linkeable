function parser(num, suffix) {
  if (num === 0) return "";
  if (num === 1) return `${num} ${suffix}`;
  if (num > 1) return `${num} ${suffix}s`;
}

function experienceInMonths(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "current" ? new Date() : new Date(endDate);
  const months = (end - start) / (1000 * 3600 * 24 * 30);

  return Math.floor(months);
}

export function parseDate(jobs, fullString = true) {
  const totalMonths = jobs.reduce((total, current) => {
    return total + experienceInMonths(current.startDate, current.endDate);
  }, 0);
  const months = totalMonths % 12;
  const years = Math.floor(totalMonths / 12);

  const monthString = parser(months, "month", fullString);
  const yearString = parser(years, "year", fullString);

  if (!yearString && !monthString) return "No data";

  return fullString
    ? `${yearString} ${monthString}`
    : yearString || monthString;
}
