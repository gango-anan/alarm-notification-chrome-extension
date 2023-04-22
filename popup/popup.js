const setAlarmButton = document.getElementById('btn-alarm');
setAlarmButton.addEventListener('click', () => {
	chrome.runtime.sendMessage({ time: '1' }, function (response) {});
});
