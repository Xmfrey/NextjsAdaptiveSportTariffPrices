export const timerCount = (days, hours, minutes, seconds) => {
  let myDays = Math.floor(days * 24 * 60 * 60 * 1000);
  let myHours = Math.floor(hours * 60 * 60 * 1000);
  let myMinutes = Math.floor(minutes * 60 * 1000);
  let mySeconds = Math.floor(seconds * 1000);

  return new Date().getTime() + myDays + myHours + myMinutes + mySeconds;
};
