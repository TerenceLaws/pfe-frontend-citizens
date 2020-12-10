
const axios = require('axios');
let applicationServerPublicKey = null;

let isSubscribed = false
let swRegistration = null

function urlB64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}


function updateSubscriptionOnServer (subscription) {
  // TODO: Send subscription to application server


   const data= {
    subscription: JSON.stringify(subscription),
    id: localStorage.getItem('id')
  }
   axios.post('https://pfe-backend-dev.herokuapp.com/notification/subscribe',data)
    //axios.post('http://localhost:5000/notification/subscribe',data)

    .then(resp => {
        console.log(resp.data);
    })
    .catch(r => console.error(r));

  console.log(JSON.stringify(subscription))

}

function subscribeUser () {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey)
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
    .then(function (subscription) {
      console.log('User is subscribed.')

      updateSubscriptionOnServer(subscription)

      isSubscribed = true
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err)
    })
}

// function unsubscribeUser () {
//   swRegistration.pushManager.getSubscription()
//     .then(function (subscription) {
//       if (subscription) {
//         return subscription.unsubscribe()
//       }
//     })
//     .catch(function (error) {
//       console.log('Error unsubscribing', error)
//     })
//     .then(function () {
//       updateSubscriptionOnServer(null)
//
//       console.log('User is unsubscribed.')
//       isSubscribed = false
//     })
// }

function initializeUI () {
 
  
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null)

      updateSubscriptionOnServer(subscription)

      if (isSubscribed) {
        console.log('User IS subscribed.')
        //unsubscribeUser()
      } else {
        console.log('User is NOT subscribed.')
        if(applicationServerPublicKey !== null){

          if (!isSubscribed) {
            console.log('sub')
            subscribeUser()
          }
        }
      }
    })

}

function startScript(){
  
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported')
      
        navigator.serviceWorker.register('sw.js')
          .then(function (swReg) {
            console.log('Service Worker is registered', swReg)
            swRegistration = swReg
            applicationServerPublicKey = localStorage.getItem("applicationServerPublicKey"); 
            initializeUI()

          })
          .catch(function (error) {
            console.error('Service Worker Error', error)
          })
      } else {
        console.warn('Push messaging is not supported')

      }
}

export default startScript
