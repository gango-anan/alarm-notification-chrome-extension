chrome.alarms.onAlarm.addListener(() => {
	chrome.notifications.create(
		{
			type: 'basic',
			iconUrl: 'images/alarm.jpg',
			title: 'Rest your eyes buddy',
			message: 'Stare at something that is 200 meters away',
			silent: false,
		},
		() => {}
	);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.time) createAlarm();
	sendResponse({ status: true });
});

function createAlarm() {
	chrome.alarms.create('rest_eyes', {
		delayInMinutes: 1,
		periodInMinutes: 1,
	});
}
