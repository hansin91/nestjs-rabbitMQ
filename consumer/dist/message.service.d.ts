import { ClientProxy } from '@nestjs/microservices';
export declare class MessageService {
    private readonly client;
    constructor(client: ClientProxy);
    send(patttern: string, data: any): Promise<any>;
}
