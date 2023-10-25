//auxiliary constnts
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]; //months 0-index based
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]; //weekdays 0-index based, sunday is 0
const oneDayMs = 24 * 60 * 60 * 1000;
const oneHourMs = 60 * 60 * 1000;
const oneMinuteMs = 60 * 1000;
const oneSecondMs = 1000;

//vars and function
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2021, 11, 14, 23, 59, 59);
const futureTime = futureDate.getTime(); //getTime() returns value in ms
const weekday = weekdays[futureDate.getDay()]; // 0-index weekdays
const date = futureDate.getDate();
const month = months[futureDate.getMonth()]; // 0-index month
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

function getRemainingTime() {
  const today = new Date().getTime();
  const remainingTimeMs = futureTime - today;

  let remainingDays = Math.floor(remainingTimeMs / oneDayMs);
  let remainingHours = Math.floor((remainingTimeMs % oneDayMs) / oneHourMs);
  let remainingMinutes = Math.floor(
    (remainingTimeMs % oneHourMs) / oneMinuteMs
  );
  let remainingSeconds = Math.floor(
    (remainingTimeMs % oneMinuteMs) / oneSecondMs
  );

  const timeValues = [
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ]; //same order like in items (grabed nodeList from DOM)

  function format(timeValue) {
    if (timeValue < 10) {
      return (timeValue = `0${timeValue}`);
    }
    return timeValue;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(timeValues[index]);
  });

  if (remainingTimeMs < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

//script-flow
let countdown = setInterval(getRemainingTime, oneSecondMs); //run given callback function, in given interval in ms
giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;
getRemainingTime(); // required to replace values from raw html when entering/refreshing site
