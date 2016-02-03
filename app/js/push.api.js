// example 1

// https://mysite.comserviceworker.js
this.onpush = function(event) {
  consoe.log(event.data);
  // write data to IndexDb, send it to any open windows display notifications
}


// https://example.com/webapp.js
navigator.serviceWorker.register('serverworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        console.log(pushSubscription.getKey('p256dh'));
        console.log(pushSubscription.getKey('auth'));
      }, function(error) {
        console.log(error);
      }
    )
  }
);
