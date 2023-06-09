import { Injectable } from '@angular/core';
import { GenericResponseResult } from '../models/genereic-response-result.model';
import { Message } from '../models/message.model';
import { MessageNotification } from '../models/message-notification.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[] = [];

  add(message: Message): void {
    this.messages.push(message);
  }

  addFromResult(result: GenericResponseResult): void {

    const message = {
      title: result.message,
      success: result.success,
      notifications: []
    } as Message;

    if (result.data) {
      if (result.data.length)
        message.notifications = result.data

      if (!result.data.length)
        message.notifications.push(result.data as MessageNotification);
    }

    this.messages.push(message);
  }

  clearAll(): void {
    this.messages.pop();
  }

  clear(index: number): void {
    if (index > -1)
      this.messages.splice(index, 1);
  }

  getMessages(): Message[] {
    return this.messages;
  }

}
