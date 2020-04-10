import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'message-service',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'messages',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [MessageService],
  exports: [MessageService],
})

export class RabbitMQModule {}
