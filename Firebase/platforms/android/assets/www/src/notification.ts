import config from './firebase.config';

declare var window: any;

export default class Notification {
  constructor() {
    if (window.FirebasePlugin) {
      window.FirebasePlugin.getToken((token) => {
        // save this server-side and use it to push notifications to this device
        console.log(token);
      }, function (error) {
        console.error(error);
      });
    } else {
      console.log('missing window.FirebasePlugin');
    }
  }
}
