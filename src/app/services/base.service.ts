import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export abstract class BaseService {
    protected host = environment.baseUrl + '/api/';
    protected headers = new HttpHeaders({
        'Accept': 'q=0.8;application/json;q=0.9',
        'Content-Type': 'application/json'
    });

    constructor(protected _http: HttpClient) {

    }

}
