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
exports.WalletsService = void 0;
const common_1 = require("@nestjs/common");
const wallet_entity_1 = require("./entities/wallet.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let WalletsService = class WalletsService {
    constructor(walletRepository) {
        this.walletRepository = walletRepository;
    }
    create(createWalletDto, userId) {
        const wallet = new wallet_entity_1.Wallet();
        wallet.currency = createWalletDto.currency;
        wallet.name = createWalletDto.name;
        wallet.user = userId;
        return this.walletRepository.save(wallet);
    }
    findAll() {
        return this.walletRepository.find();
    }
    findWalletUser(user) {
        return this.walletRepository.find({ where: { user: {
                    id: user
                } }, relations: ['currency'],
        });
    }
    findOne(id) {
        return this.walletRepository.findOne({
            where: { id }, relations: {
                currency: true
            }
        });
    }
    update(id, updateWalletDto) {
        return this.walletRepository.update(id, updateWalletDto);
    }
    remove(id) {
        return this.walletRepository.delete(id);
    }
    async addPrice(walletId, amount) {
        try {
            const wallet = await this.walletRepository.findOneOrFail({
                where: { id: walletId }
            });
            wallet.price += amount;
            return this.walletRepository.save(wallet);
        }
        catch (error) {
            throw new Error(`Failed to add currency to wallet with ID ${walletId}.`);
        }
    }
};
exports.WalletsService = WalletsService;
exports.WalletsService = WalletsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(wallet_entity_1.Wallet)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WalletsService);
//# sourceMappingURL=wallets.service.js.map