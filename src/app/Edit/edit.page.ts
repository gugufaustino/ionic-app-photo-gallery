import { Component } from '@angular/core';
import { PhotoService } from '../app-core/services/photo.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {

  constructor(public photoService: PhotoService) {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
