import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './upload';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadService {
  constructor(
    private db: AngularFireDatabase
  ) { }

  private basePath = '';
  // uploads$: AngularFireList<Upload[]> = this.db.list(`${this.basePath}`);

  private fullPath(path: string, filename: string) {
    return `${this.basePath}/${path}/${filename}`;
  }
  // Writes the file details to the realtime db
  private async saveFileData(upload: Upload, path) {

    await this.db.list(`${this.basePath}/${path}`).push(upload);
  }

  pushUpload( upload: Upload, path = '\\') {

    const fullPath = this.fullPath( path, upload.file.name );
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(fullPath).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        console.log('uploaded', upload);
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, path).then( () => console.log('path saved'));
      }
    );
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name);
    })
    .catch(error => console.log(error));
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string, path = '//') {
    const fullPath = this.fullPath( path, name);
    return this.db.list(fullPath).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string, path = '//') {
    const storageRef = firebase.storage().ref();
    const fullPath = this.fullPath( path, name);
    storageRef.child(fullPath).delete();
  }
}
