import { Controller, Logger } from '@nestjs/common';
import { Payload, Ctx, RmqContext, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger();

  @MessagePattern('message_printed')
  async handleMessagePrinted(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMesssage();
    this.logger.log('Message received: ' + JSON.stringify(data));
    setTimeout( () => {
      channel.ack(originalMessage);
    }, 3000);
  }
}
