import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { TransferMoneyDto } from './dto/transfer-money.dto';
import { Transfer } from 'src/transfer/entities/transfer.entity';
export declare class WalletsService {
    private walletRepository;
    private transferRepository;
    constructor(walletRepository: Repository<Wallet>, transferRepository: Repository<Transfer>);
    create(createWalletDto: CreateWalletDto, userId: string): Promise<Wallet>;
    findAll(): Promise<Wallet[]>;
    findWalletUser(user: string): Promise<Wallet[]>;
    findOne(id: string): Promise<Wallet | null>;
    update(id: number, updateWalletDto: UpdateWalletDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    addPrice(walletId: string, amount: number): Promise<Wallet>;
    transferMoney(WalletId: string, TransferMoneyDto: TransferMoneyDto): Promise<{
        senderWallet: Wallet;
        receiverWallet: Wallet;
        transfer: Transfer;
    }>;
}
