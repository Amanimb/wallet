import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
export declare class WalletsService {
    private walletRepository;
    constructor(walletRepository: Repository<Wallet>);
    create(createWalletDto: CreateWalletDto, userId: string): Promise<Wallet>;
    findAll(): Promise<Wallet[]>;
    findWalletUser(user: string): Promise<Wallet[]>;
    findOne(id: string): Promise<Wallet | null>;
    update(id: number, updateWalletDto: UpdateWalletDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    addPrice(walletId: string, amount: number): Promise<Wallet>;
}
