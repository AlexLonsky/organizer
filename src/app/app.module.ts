import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { EventPage } from '../pages/event/event';
import { CreateEventPage } from '../pages/event/createEvant/createEvent';
import { ModalTimeEvent } from '../pages/event/createEvant/modal-time-event/modal-time-event';
import { MyPopOverPage } from '../pages/event/my-pop-over/my-pop-over';
import { ParticipatePage } from '../pages/event/participate/participate';
import { GoPage } from '../pages/event/go/go';
import { NotGoPage } from '../pages/event/not-go/not-go';
import { WaitingPage } from '../pages/event/waiting/waiting';

import { NotificationsPage } from '../pages/event/notifications/notifications';
import { CalendarPage } from '../pages/calendar/calendar';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';


import { GlobalService } from '../services/global.services';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    EventPage,
    CalendarPage,
    GroupsPage,
    SettingsPage,
    CreateEventPage,
    MyPopOverPage,
    ParticipatePage,
    GoPage,
    NotGoPage,
    WaitingPage,
    NotificationsPage,
    ModalTimeEvent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      iconMode: 'md'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    EventPage,
    CalendarPage,
    GroupsPage,
    SettingsPage,
    CreateEventPage,
    MyPopOverPage,
    GoPage,
    NotGoPage,
    WaitingPage,
    ParticipatePage,
    NotificationsPage,
    ModalTimeEvent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
