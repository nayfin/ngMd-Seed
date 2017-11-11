import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import * as _ from 'lodash';

@Component({
  selector: 'tft-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private upSvc: UploadService) { }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }
  uploadSingle( path: string ) {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, path);
  }
}
