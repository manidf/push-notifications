// When a push message is received, the browser can run a Service Worker in the
// background to handle push messages without requiring a web page to be open.

console.log('Started', self);

// self refers to the ServiceWorkerGlobalScope object: the Service worker itself
self.addEventListener('install', function(event) {
    // Service worker will skip the waiting state and immediately activate
    self.skipWaiting();
    console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
   console.log('Activated', event);
});

self.addEventListener('push', function(event) {
   console.log('Push message recieved', event);
    // TODO
});