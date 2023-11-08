
const currentDate = new Date();
console.log(currentDate);
const currentHourse = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();
Month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Авгуся', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
for (let i = 0; i < Month.length; i++) {
	if (currentMonth == i) {
		Days = document.querySelector('.day');
		Days.innerHTML = currentDay + ',';
		Months = document.querySelector('.month');
		Months.innerHTML = Month[i] + ',';
		Years = document.querySelector('.year');
		Years.innerHTML = currentYear;
	}
}
function currentTime() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  
  const hours = document.querySelector('.hours');
	if (currentHours < 10) {
		hours.innerHTML = '0' + currentHours;
	}
		else {

			hours.innerHTML = currentHours;
		}
  const minutes = document.querySelector('.minutes');
	if (currentMinutes < 10) {
		minutes.innerHTML = '0' + currentMinutes;
	}
		else {
			minutes.innerHTML = currentMinutes;
		}
  const seconds = document.querySelector('.seconds');
	if (currentSeconds < 10) {
		seconds.innerHTML = '0' + currentSeconds;

	}
	else {
		seconds.innerHTML = currentSeconds;
	}

}

setInterval(currentTime, 1000);