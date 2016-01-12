// Register and install a Sevice Worker

if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');

    navigator.serviceWorker.register('/sw.js')
        .then(function(reg) {
            console.log(':^)', reg);
        }).catch(function(err) {
            console.log(':^(', err);
    });
}