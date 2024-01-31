export function formatDate(inputDate) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(inputDate);

  return date.toLocaleDateString("en-US", options);
}
