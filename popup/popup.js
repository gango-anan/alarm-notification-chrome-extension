const setAlarmButton = document.getElementById('btn-alarm');
const selectTimeButton = document.getElementById('select-time');
let selectedTime = '';

selectTimeButton.addEventListener('click', () => {
	const selectedTimeOption = document.getElementById('time-options');
	selectedTime = selectedTimeOption.value;
});

setAlarmButton.addEventListener('click', () => {
	if (!selectedTime) {
		console.log('Please select a time!');
		return;
	}
	chrome.runtime.sendMessage({ time: selectedTime }, function (response) {});
});
