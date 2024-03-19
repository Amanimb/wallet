import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { TransferMoneyDto } from './dto/transfer-money.dto';
import { Wallet } from './entities/wallet.entity';
export declare class WalletsController {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    create(createWalletDto: CreateWalletDto, request: any): Promise<Wallet>;
    findAll(): Promise<Wallet[]>;
    find_Wallet_User(request: any): Promise<Wallet[]>;
    findOne(id: string): Promise<Wallet | null>;
    update(id: string, updateWalletDto: UpdateWalletDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    addPrice(walletId: string, amount: number): Promise<{
        message: string;
        wallet: Wallet;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
        wallet?: undefined;
    }>;
    transferMoney(walletId: string, transferMoneyDto: TransferMoneyDto): Promise<{
        senderWallet: Wallet;
        receiverWallet: Wallet;
        transfer: import("../transfer/entities/transfer.entity").Transfer;
        message: string;
    }>;
    catch(error: any): {
        error: string;
    };
}
