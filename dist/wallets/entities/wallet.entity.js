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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const swagger_1 = require("@nestjs/swagger");
const currency_entity_1 = require("../../currencies/entities/currency.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Wallet = class Wallet {
};
exports.Wallet = Wallet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Wallet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wallet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    (0, swagger_1.ApiResponseProperty)(),
    __metadata("design:type", Number)
], Wallet.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.wallets),
    __metadata("design:type", Object)
], Wallet.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.Currency, (currency) => currency.wallets),
    __metadata("design:type", Object)
], Wallet.prototype, "currency", void 0);
exports.Wallet = Wallet = __decorate([
    (0, typeorm_1.Entity)()
], Wallet);
//# sourceMappingURL=wallet.entity.js.map