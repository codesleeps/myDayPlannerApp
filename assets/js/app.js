// Add the current day month year to top of page
$('#currentDay').text(moment().format('dddd 3, MMMM , 2023'));

//Make an array for work hours 9am - 5pm
const workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
// for loop
for(let i = 0; i < workHours.length; i++){
  let hours = workHours[i];
  let hoursString = moment(hours, 'hh A').format('hh A');
  workHours[i] = hoursString;
}