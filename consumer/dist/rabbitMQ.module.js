"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const message_service_1 = require("./message.service");
let RabbitMQModule = class RabbitMQModule {
};
RabbitMQModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'message-service',
                    transport: microservices_1.Transport.RMQ,
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
        providers: [message_service_1.MessageService],
        exports: [message_service_1.MessageService],
    })
], RabbitMQModule);
exports.RabbitMQModule = RabbitMQModule;
//# sourceMappingURL=rabbitMQ.module.js.map