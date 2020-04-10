import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RabbitMQModule } from './rabbitMQ.module';

@Module({
  imports: [RabbitMQModule],
  controllers: [AppController],
})
export class AppModule {}
