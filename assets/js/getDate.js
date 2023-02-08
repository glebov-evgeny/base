export default function getDate(date) {
  const dateArr = date.split('-');
  const monthArr = [
    ['января'],
    ['февраля'],
    ['марта'],
    ['апреля'],
    ['мая'],
    ['июня'],
    ['июля'],
    ['августа'],
    ['сентября'],
    ['октября'],
    ['ноября'],
    ['декабря'],
  ];
  const day = dateArr[2];
  const month = Number(dateArr[1] - 1);
  const currentMonth = monthArr[month].toString();
  return `${day} ${currentMonth}`;
}
