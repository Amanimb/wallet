"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsModule = void 0;
const common_1 = require("@nestjs/common");
const wallets_service_1 = require("./wallets.service");
const wallets_controller_1 = require("./wallets.controller");
const typeorm_1 = require("@nestjs/typeorm");
const wallet_entity_1 = require("./entities/wallet.entity");
const currencies_module_1 = require("../currencies/currencies.module");
const transfer_entity_1 = require("../transfer/entities/transfer.entity");
let WalletsModule = class WalletsModule {
};
exports.WalletsModule = WalletsModule;
exports.WalletsModule = WalletsModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => currencies_module_1.CurrenciesModule),
            typeorm_1.TypeOrmModule.forFeature([wallet_entity_1.Wallet, transfer_entity_1.Transfer])
        ],
        controllers: [wallets_controller_1.WalletsController],
        providers: [wallets_service_1.WalletsService],
        exports: [wallets_service_1.WalletsService],
    })
], WalletsModule);
//# sourceMappingURL=wallets.module.js.map