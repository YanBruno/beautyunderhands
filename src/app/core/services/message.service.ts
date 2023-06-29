import { Injectable } from '@angular/core';
import { GenericResponseResult } from '../models/genereic-response-result.model';
import { Message } from '../models/message.model';

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
      notifications: result.data
    } as Message;

    this.messages.push(message);
  }

  clear(): void {
    this.messages.pop();
  }

  getMessages(): Message[] {
    return this.messages;
  }

}
