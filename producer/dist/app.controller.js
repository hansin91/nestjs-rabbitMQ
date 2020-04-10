"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor() {
        this.logger = new common_1.Logger();
    }
    async handleMessagePrinted(data, context) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMesssage();
        this.logger.log('Message received: ' + JSON.stringify(data));
        setTimeout(() => {
            channel.ack(originalMessage);
        }, 3000);
    }
};
__decorate([
    microservices_1.MessagePattern('message_printed'),
    __param(0, microservices_1.Payload()), __param(1, microservices_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "handleMessagePrinted", null);
AppController = __decorate([
    common_1.Controller()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map