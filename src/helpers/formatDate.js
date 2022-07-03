const fromNow = (dateString) => new Intl.RelativeTimeFormat().format(-5, "day");

const formatDate = (dateString) => dateString.substr(4, 11);

const subtractDate = (dateString) => {
  const now = new Date();
  const postedDate = new Date(dateString);
  const diffTime = Math.abs(postedDate - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const renderDate = (dateString) => {
  console.log(subtractDate(dateString));
  const daysOld = subtractDate(dateString);
  return daysOld < 8 ? fromNow(dateString) : formatDate(dateString);
};
