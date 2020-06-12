import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
    selector: 'photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {

  
    photo: any = {}
    file: any
    public message: string;
    @ViewChild('video', { static: true }) videoElement: ElementRef;
    @ViewChild('canvas', { static: true }) canvas: ElementRef;

    videoWidth = 0;
    videoHeight = 0;
    constraints = {
        video: {
            facingMode: "environment",
            width: { ideal: 2096 },
            height: { ideal: 1160 }
        }
    };

    constructor(private api: ApiService, private http: HttpClient, private renderer: Renderer2) { }

    ngOnInit() {
        this.startCamera();
    }

    startCamera() {
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
        } else {
            alert('Sorry, camera not available.');
        }
    }

    attachVideo(stream) {
        this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
        this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
            this.videoHeight = this.videoElement.nativeElement.videoHeight;
            this.videoWidth = this.videoElement.nativeElement.videoWidth;
        });
    }

    capture() {
        this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
        this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
        this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
        
    }

    handleError(error) {
        console.log('Error: ', error);
    }

    upload(photo) {
        //console.log(this.canvas.nativeElement.toDataURL())
        photo.file = this.canvas.nativeElement.toDataURL("image/png")
        console.log(photo);
        this.api.uploadPhoto(photo);
        this.message = 'Photo posted successfully.';

    }



}

