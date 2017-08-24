import config from './firebase.config';

declare var window: any;

export default class Notification {

  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  private onDeviceReady() {
    window.FirebasePlugin.getToken((token: string) => {
      // save this server-side and use it to push notifications to this device
      console.log(token);
    }, function (error) {
      console.error(error);
    });

    window.FirebasePlugin.onTokenRefresh((token: string) => {
      // save this server-side and use it to push notifications to this device
      console.log(token);
    }, function (error) {
      console.error(error);
    });
    window.FirebasePlugin.subscribe('rps');
    window.FirebasePlugin.onNotificationOpen((notification) =>  {
      console.log(notification);
    }, function (error) {
      console.error(error);
    });
  }
}
