import { RmqContext } from '@nestjs/microservices';
export declare class AppController {
    private logger;
    handleMessagePrinted(data: any, context: RmqContext): Promise<void>;
}
