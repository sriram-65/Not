// sw.js
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://geeksforgeeks.org')
  );
});
