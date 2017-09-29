import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
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
import { Camera, CameraOptions } from '@ionic-native/camera';


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
  public userInfo: any;
  public base64Image:any;
  
  private userToken: any;
  
  
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private fcm: FCM,
              public globalService: GlobalService,
              public device: Device,
              public storage: Storage,
              public camera: Camera,
              public events: Events) {

    events.subscribe('user:created', (user: boolean) => {
      if (user) {
        alert(11111)
        this.getUserInfo();
      }
    });
        this.initializeApp();



    this.pages = [
      { title: 'Событие', component: EventPage, icon: 'md-walk', class: 'event'},
      { title: 'Календарь', component: CalendarPage, icon: 'md-calendar', class: 'calendar'},
      { title: 'Группы', component: GroupsPage, icon: 'md-people', class: 'groups'},
      { title: 'Настройки', component: SettingsPage, icon: 'md-settings', class: 'settings'},
      { title: 'Выход', component: '', icon: 'ios-log-out' ,logsOut: true, class: 'exit'}
    ];

  }
  getUserInfo() {
    let data = {};
    this.globalService.httpRequestPost(data, 'api/getUserInfo').then((res) => {
      if(res) {
        alert(JSON.stringify(res));
        console.log(res);
        this.globalService.userInfo = res.description.results;
        console.log(res.description.results)
      }

    })
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.getUserInfo();
      this.storage.get('userToken').then((val) => {
        if (val) {
          this.userToken = val.token;
          this.rootPage = EventPage;
        }
        else {
          this.rootPage = RegistrationPage;
            var deviceUuid = this.device.uuid ? this.device.uuid : '';
            let deviceData = {
              uuid: deviceUuid,
            };

            this.storage.set('DeviceData', deviceData).then(() =>{
            }).then(() => {
              this.getUserInfo();
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
    console.log(number.value)

  }
  setName(name){
    this.changeName = this.changeName ? false : true;
    if(name) {
      let data = {
        "userName": name.value,
        "auth_token": this.userToken
      };
      this.globalService.httpRequestPost(data, 'api/updateUserName').then((res) => {
        if(res.description.status === "OK"){
          console.log('good')
          this.globalService.userInfo = name.value;
          this.getUserInfo();
        }
      })
    }

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

  cameraTest() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      // alert(JSON.stringify(imageData));
    }, (err) => {
      alert(JSON.stringify(err));
      return;
      // Handle error
    }).then(() => {
      if(this.base64Image) {
        let data = {
          "image": this.base64Image,
        };
        this.globalService.httpRequestPost(data, 'api/updateUserPhoto').then((res) => {
          if(res) {
            console.log(res);

          }

        })

      }

    });
  }

  pictureFromGallery() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      // alert(JSON.stringify(imageData));
    }, (err) => {
      alert(JSON.stringify(err));
      return;
      // Handle error
    }).then(() => {
      if(this.base64Image) {
        let data = {
          "image": this.base64Image,
        };
        // this.globalService.httpRequestPost(data, 'api/updateUserPhoto').then((res) => {
        //   if(res) {
        //     console.log(res);
        //
        //   }
        //
        // })

      }

    });
  }
}
