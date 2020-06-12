import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
    <mat-toolbar>
        <button mat-button routerLink="/photo">Upload Photo</button>
        <button mat-button routerLink="/photos">Photos List</button>
    </mat-toolbar>
  `
})
export class NavComponent {

}
