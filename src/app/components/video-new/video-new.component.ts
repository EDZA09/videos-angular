import { Component } from '@angular/core';

@Component({
  selector: 'app-video-new',
  standalone: true,
  imports: [],
  templateUrl: './video-new.component.html',
  styleUrl: './video-new.component.css',
})
export class VideoNewComponent {
  public page_title: string;
  constructor() {
    this.page_title = 'Guardar un nuevo video favorito';
  }
}
