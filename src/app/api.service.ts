import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class ApiService {
    public response: { 'dbPath': '' }; 
    constructor(private http: HttpClient) { }

    getPhotos() {
       return this.http.get('http://localhost:63843/api/upload');

    }

    uploadPhoto(photo) {
        this.http.post('http://localhost:63843/api/upload', photo ).subscribe(res => {
            console.log(res)
        })

    }
    public uploadFinished = (event) => {
        this.response = event;
    }

    public createImgPath = (serverPath: string) => {
        return `https://localhost:63843/${serverPath}`;
    }
}
