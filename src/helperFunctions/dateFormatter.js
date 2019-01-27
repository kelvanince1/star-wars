export const formatDate = function(date) {
  const dateString = date.replace(/-/g, '');
  const year = dateString.substring(0,4);
  const month = dateString.substring(4,6);
  let day = dateString.substring(6,8);

  const days = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  }

  date =
    new Date(year, month-1, day)
      .toString()
      .split(' ')
      .slice(0,4)
      .join(' ');

  let dateCopy = date.toString();
  dateCopy = dateCopy.split('').slice(0,3).join('');
  for (let ele in days) {
    if (dateCopy === ele) {
      dateCopy = days[ele];
    }
  }
  date = date.split(' ');
  date[0] = dateCopy;
  date = date.join(' ');
  return date;
}
