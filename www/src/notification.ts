import * as firebase from 'firebase';
import config from './firebase.config';

declare var window: any;

export default class Notification {
  private app: any;
  constructor() {
    this.app = firebase.initializeApp(config);
  }
}
