// example 1

// https://mysite.comserviceworker.js
this.onpush = function(event) {
  consoe.log(event.data);
  // write data to IndexDb, send it to any open windows display notifications
}


// https://example.com/webapp.js
navigator.serviceWorker.register('serverworker.js').then(
  
);
