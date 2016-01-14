// When a push message is received, the browser can run a Service Worker in the
// background to handle push messages without requiring a web page to be open.

console.log('Started', self);
self.addEventListener('install', function(event) {
	self.skipWaiting();
	console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
	console.log('Activated', event);
});
self.addEventListener('push', function(event) {
	console.log('Push message', event);
	var title = 'Push message';
	event.waitUntil(
		self.registration.showNotification(title, {
			body: 'Hello Superbalista!! FLASH SALE! This text will flash if you stare at it long enough...promise',
			icon: 'images/icon.png',
			tag: 'my-tag'
		}));
});

// TODO


// 1
// self refers to the ServiceWorkerGlobalScope object: the Service worker itself

// 2
// Service worker will skip the waiting state and immediately activate
