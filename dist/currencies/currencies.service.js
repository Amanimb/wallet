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
exports.CurrenciesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const currency_entity_1 = require("./entities/currency.entity");
const typeorm_2 = require("typeorm");
const wallets_service_1 = require("../wallets/wallets.service");
let CurrenciesService = class CurrenciesService {
    constructor(currencyRepository, walletService) {
        this.currencyRepository = currencyRepository;
        this.walletService = walletService;
    }
    create(createCurrencyDto) {
        return this.currencyRepository.save(this.currencyRepository.create(createCurrencyDto));
    }
    findAll() {
        return this.currencyRepository.find();
    }
    findOne(id) {
        return this.currencyRepository.findOne({
            where: {
                id
            }
        });
    }
    update(id, updateCurrencyDto) {
        return this.currencyRepository.update(id, updateCurrencyDto);
    }
    remove(id) {
        return this.currencyRepository.delete({
            id
        });
    }
    async listCurrenciesAvailable(userId) {
        const userWallets = await this.walletService.findWalletUser(userId);
        const currencies = await this.findAll();
        const currenciesAvailable = [];
        for (const currency of currencies) {
            let isCurrencyUsed = false;
            for (const wallet of userWallets) {
                const walletCurrencyId = typeof wallet.currency === 'string' ? wallet.currency : wallet.currency.id;
                if (currency.id === walletCurrencyId) {
                    isCurrencyUsed = true;
                    break;
                }
            }
            if (!isCurrencyUsed) {
                currenciesAvailable.push(currency);
            }
        }
        return currenciesAvailable;
    }
};
exports.CurrenciesService = CurrenciesService;
exports.CurrenciesService = CurrenciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(currency_entity_1.Currency)),
    __metadata("design:paramtypes", [typeorm_2.Repository, wallets_service_1.WalletsService])
], CurrenciesService);
//# sourceMappingURL=currencies.service.js.map