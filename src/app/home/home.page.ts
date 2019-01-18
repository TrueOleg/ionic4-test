import { Component } from '@angular/core';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private filePicker: IOSFilePicker) { }
  pickFile() {
    this.filePicker.pickFile()
      .then(uri => console.log(uri))
      .catch(err => console.log('Error', err));
  }

  pickFileNext() {
    (<any>window).plugins.mediapicker.getAudio(
      function success(data) {
        console.log(JSON.stringify(data));
      },
      function error(e) {
        console.log(e);
      }, false, true, 'title');
  }
}
