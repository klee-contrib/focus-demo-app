console.log('Hello app');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/sw/' }).then(reg => {

      if(reg.installing) {
          console.log('Service worker installing');
      } else if(reg.waiting) {
          console.log('Service worker installed');
      } else if(reg.active) {
          console.log('Service worker active');
      }

  }).catch(error => {
      // registration failed
      console.log('Registration failed with ' + error);
  });
}
