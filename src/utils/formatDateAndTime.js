export const formatDateAndTime = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours() % 12 || 12;
  const minute = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  const suffixes = ["th", "st", "nd", "rd"];
  const ordinal = day % 10 < 4 ? suffixes[day % 10] : suffixes[0];

  return `${month} ${day}${ordinal}, ${year} ${hour}:${minute}${ampm}`;
};
