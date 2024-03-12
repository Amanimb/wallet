import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletsController {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    create(createWalletDto: CreateWalletDto, request: any): Promise<import("./entities/wallet.entity").Wallet>;
    findAll(): Promise<import("./entities/wallet.entity").Wallet[]>;
    find_Wallet_User(request: any): Promise<import("./entities/wallet.entity").Wallet[]>;
    findOne(id: string): Promise<import("./entities/wallet.entity").Wallet | null>;
    update(id: string, updateWalletDto: UpdateWalletDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    addPrice(walletId: string, amount: number): Promise<{
        message: string;
        wallet: import("./entities/wallet.entity").Wallet;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
        wallet?: undefined;
    }>;
}
