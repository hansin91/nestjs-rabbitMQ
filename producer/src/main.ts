import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'messages',
      queueOptions: {
        durable: false,
      },
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.listen(() => logger.log('Microservice is listening'));
}
bootstrap();
