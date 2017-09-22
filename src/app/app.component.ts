import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalService } from '../services/global.services';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ListPage } from '../pages/list/list';
import { EventPage } from '../pages/event/event';
import { CalendarPage } from '../pages/calendar/calendar';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';

import {Storage} from '@ionic/storage';



import {FCM} from '@ionic-native/fcm';
import {Device} from '@ionic-native/device';


export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
  class: any;
}

@Component({
  templateUrl: 'app.html',
  providers: [FCM]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: PageInterface[];
  public viewEdit: boolean = false;
  public changeNumber: boolean = false;
  public changeName: boolean = false;
  public addTel: boolean = false;
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private fcm: FCM,
              public globalService: GlobalService,
              public device: Device,
              public storage: Storage) {


        this.initializeApp();



    this.pages = [
      { title: 'Событие', component: EventPage, icon: 'md-walk', class: 'event'},
      { title: 'Календарь', component: CalendarPage, icon: 'md-calendar', class: 'calendar'},
      { title: 'Группы', component: GroupsPage, icon: 'md-people', class: 'groups'},
      { title: 'Настройки', component: SettingsPage, icon: 'md-settings', class: 'settings'},
      { title: 'Выход', component: '', icon: 'ios-log-out' ,logsOut: true, class: 'exit'}
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get('userToken').then((val) => {
        if (val) {
          this.rootPage = EventPage;
        }
        else {
          this.rootPage = RegistrationPage;
            var deviceUuid = this.device.uuid ? this.device.uuid : '';
            let deviceData = {
              uuid: deviceUuid,
            };

            this.storage.set('DeviceData', deviceData).then(() =>{
            });

        }
      });




    });
  }
  
  edit(){
    this.viewEdit = this.viewEdit? false: true;
  }
  setNumber(){
    this.changeNumber = this.changeNumber? false: true;
  }
  saveNumberChange(number){
    this.changeNumber = false;
    console.log('save change')
  }
  setName(name){
    this.changeName = this.changeName ? false : true;
  }
  setTelephone() {
    this.addTel = this.addTel ? false : true;
  }
  saveNewTelephone(tel) {
    this.addTel = false;
  }
  openPage(page) {
    if (page.logsOut === true) {
      console.log('logout');
      this.storage.remove('userToken');
      this.nav.setRoot(LoginPage);
      return;
    }

    

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
