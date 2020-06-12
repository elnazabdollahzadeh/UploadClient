import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'photos',
    templateUrl: './photos.component.html'
})
export class PhotosComponent {

    photo: any = {}
    photos:any

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getPhotos().subscribe(res => {
            this.photos = res
        })
    }

    upload(photo) {
        console.log(photo);
        this.api.uploadPhoto(photo);
    }
}
