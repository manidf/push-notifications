// Register and install a Service Worker

if('serviceWorker' in navigator) {
	console.log('Service Worker is supported');
	navigator.serviceWorker.register('sw.js').then(function(reg) {
		console.log(':^)', reg);
		reg.pushManager.subscribe({
			userVisibleOnly: true // 1
		}).then(function(sub) {
			console.log('endpoint: ', sub.endpoint);
		});
	}).catch(function(error) {
		console.log(':^(', error);
	});
}

// 1.
// You must pass a {userVisibleOnly: true} argument to the subscribe() method.
// This tells the browser that a notification will always be shown when a push message is received.
// Currently it’s mandatory to show a notification.
