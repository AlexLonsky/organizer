import {Injectable} from '@angular/core';




@Injectable()
export class GlobalService {
    public loader: any;
    public apiUrl: string = 'http://kindremind.co/';
    public lang:any;
    public translateReq: any;

    constructor() {
    }




}
