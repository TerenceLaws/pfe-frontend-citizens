
'use strict'

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)

  const title = 'Important message'
  const options = {
    body: `${event.data.text()}`,
    icon: 'img/icon.png',
    badge: 'images/badge.png'
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.')

  event.notification.close()


})