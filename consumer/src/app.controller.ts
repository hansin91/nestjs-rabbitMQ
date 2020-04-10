import { Controller, Get, Inject, Logger, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly messageService: MessageService) {}

  @Post()
  sender(@Body('data') data: any) {
    this.messageService.send('message_printed', data);
    this.logger.log('Message send');
    return data;
  }
}
