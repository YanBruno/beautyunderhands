import { Component } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent {

  constructor(public service: MessageService) {

  }

  onClose(index: number): void {
    this.service.clear(index);
  }
}
