import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { PhotoComponent } from './photo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApiService } from './api.service';
import { PhotosComponent } from './photos.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home.component'
import { NavComponent} from './nav.component'


const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'photo', component: PhotoComponent },
    { path: 'photos', component: PhotosComponent },
]

@NgModule({
  declarations: [
        AppComponent, PhotoComponent, PhotosComponent, HomeComponent, NavComponent, UploadComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule,
      MatProgressBarModule

  ],
    providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
