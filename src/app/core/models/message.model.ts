import { MessageNotification } from "./message-notification.model";

export interface Message {
    title: string;
    success: boolean;
    notifications: MessageNotification[];
}