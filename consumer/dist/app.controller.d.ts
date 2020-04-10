import { MessageService } from './message.service';
export declare class AppController {
    private readonly messageService;
    private logger;
    constructor(messageService: MessageService);
    sender(data: any): any;
}
