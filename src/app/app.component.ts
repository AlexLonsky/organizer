import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { EventPage } from '../pages/event/event';
import { CalendarPage } from '../pages/calendar/calendar';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';



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
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: PageInterface[];
  public viewEdit: boolean = false;
  public changeNumber: boolean = false;
  public changeName: boolean = false;
  public addTel: boolean = false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
    console.log(number.value)
  }
  setName(name){
    this.changeName = this.changeName ? false : true;
  }
  setTelephone() {
    this.addTel = this.addTel ? false : true;
  }
  saveNewTelephone(tel) {
    this.addTel = false;
    console.log(tel)
  }
  openPage(page) {
    if (page.logsOut === true) {
      console.log('logout');
      this.nav.setRoot(LoginPage);
      return;
    }

    

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
