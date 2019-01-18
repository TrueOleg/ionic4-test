import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pickAudio() {
    (<any>window).plugins.mediapicker.getAudio(
      function success(data) {
        console.log(JSON.stringify(data));
      },
      function error(e) {
        console.log(e);
      }, false, true, 'title');
  }
}
