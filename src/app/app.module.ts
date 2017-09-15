import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { EventPage } from '../pages/event/event';
import { CreateEventPage } from '../pages/event/createEvant/createEvent';
import { CalendarPage } from '../pages/calendar/calendar';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';

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
    CreateEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    CreateEventPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
