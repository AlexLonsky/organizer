import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ListPage } from '../pages/list/list';
import { EventPage } from '../pages/event/event';
import { CreateEventPage } from '../pages/event/createEvant/createEvent';
import { SecondTeamPage } from '../pages/event/createEvant/second-team/secondTeam';
import { FirstTeamPage } from '../pages/event/createEvant/first-team/firstTeam';
import { ModalTimeEvent } from '../pages/event/createEvant/modal-time-event/modal-time-event';
import { MyPopOverPage } from '../pages/event/my-pop-over/my-pop-over';
import { ParticipatePage } from '../pages/event/participate/participate';
import { GoPage } from '../pages/event/go/go';
import { NotGoPage } from '../pages/event/not-go/not-go';
import { WaitingPage } from '../pages/event/waiting/waiting';

import { NotificationsPage } from '../pages/event/notifications/notifications';
import { CalendarPage } from '../pages/calendar/calendar';
import { GroupsPage } from '../pages/groups/groups';
import { CreateGroupPage } from '../pages/groups/create-group/create-group';
import { AddUsersPage } from '../pages/groups/create-group/add-users/add-users';
import { SettingsPage } from '../pages/settings/settings';
import { AboutAppPage } from '../pages/settings/aboutApp/aboutApp';
import { ReminderOptionsPage } from '../pages/settings/reminderOptions/reminderOptions';
import { TimeZonePage } from '../pages/settings/time-zone/time-zone';


import { GlobalService } from '../services/global.services';
import {IonicStorageModule} from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



//Plugin
import {FCM} from '@ionic-native/fcm';
import {Device} from '@ionic-native/device';
import {Camera} from '@ionic-native/camera';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ListPage,
    EventPage,
    CalendarPage,
    GroupsPage,
    CreateGroupPage,
    AddUsersPage,
    SettingsPage,
    AboutAppPage,
    ReminderOptionsPage,
    TimeZonePage,
    CreateEventPage,
    MyPopOverPage,
    ParticipatePage,
    GoPage,
    NotGoPage,
    WaitingPage,
    NotificationsPage,
    ModalTimeEvent,
    FirstTeamPage,
    SecondTeamPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgCalendarModule,
    IonicStorageModule.forRoot(),
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
    RegistrationPage,
    ListPage,
    EventPage,
    CalendarPage,
    GroupsPage,
    CreateGroupPage,
    AddUsersPage,
    SettingsPage,
    AboutAppPage,
    ReminderOptionsPage,
    TimeZonePage,
    CreateEventPage,
    MyPopOverPage,
    GoPage,
    NotGoPage,
    WaitingPage,
    ParticipatePage,
    NotificationsPage,
    ModalTimeEvent,
    FirstTeamPage,
    SecondTeamPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    FCM,
    Device,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
