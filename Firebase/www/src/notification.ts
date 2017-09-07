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
    }, (error) => {
      console.error(error);
    });

    window.FirebasePlugin.onTokenRefresh((token: string) => {
      // save this server-side and use it to push notifications to this device
      console.log(token);
    }, (error) => {
      console.error(error);
    });
    window.FirebasePlugin.hasPermission((data) => {
      if (!data.isEnabled) {
        window.FirebasePlugin.grantPermission();
      }
    });
    window.FirebasePlugin.subscribe('Production');
    window.FirebasePlugin.subscribe('QA');
    window.FirebasePlugin.subscribe('TD');
    window.FirebasePlugin.onNotificationOpen((notification) => {
      const notificationbtn = document.querySelector('#notification-button') as HTMLButtonElement;
      notificationbtn.textContent = JSON.stringify(notification);
      console.log(notificationbtn.textContent);
    }, (error) => {
      console.error(error);
    });
  }
}
