import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';


import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GlobalService {
    public apiUrl: string = 'http://sportevent.hm/';
    public userInfo: any;
    public timeEvent: any;

    constructor(public http: Http,
                public storage: Storage) {
        
    }
   
    

    httpRequestPost(data, url: string) {

        return this.storage.get('userToken').then((val) => {
            if (val) {
                console.log(val)
                data.auth_token =  val
            }
            console.log(data);
            data = JSON.stringify(data);
            console.log(data);
            let headers = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({headers: headers});
            let results = this.http.post(this.apiUrl + url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch((error)=>{
                    console.log(error)
                });
            return results.then((response: any) => {
                console.log(results);
                if (response && response.status == 'error_token') {
                    // this.storage.remove('token').then(() => {
                    //     this.app.getRootNav().setRoot(Login);
                    // });
                }
                return results;
            }).catch((error: any) => {
                return error;
            });


        });

    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



}
