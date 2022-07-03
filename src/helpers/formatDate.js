const fromNow = (dateString) => new Intl.RelativeTimeFormat().format(-5, "day");

const formatDate = (dateString) => dateString.substr(4, 11);

export const renderDate = (dateString) => {
  const daysOld = +fromNow(dateString).split(" ")[0];
  return daysOld < 8 ? fromNow(dateString) : formatDate(dateString);
};
