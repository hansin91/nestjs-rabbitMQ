import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  constructor(@Inject('message-service') private readonly client: ClientProxy) {}

  public send(patttern: string, data: any) {
    return this.client.send(patttern, data).toPromise();
  }
}
