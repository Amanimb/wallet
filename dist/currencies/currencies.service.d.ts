import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './entities/currency.entity';
import { Repository } from 'typeorm';
import { WalletsService } from 'src/wallets/wallets.service';
export declare class CurrenciesService {
    private currencyRepository;
    private walletService;
    constructor(currencyRepository: Repository<Currency>, walletService: WalletsService);
    create(createCurrencyDto: CreateCurrencyDto): Promise<Currency>;
    findAll(): Promise<Currency[]>;
    findOne(id: string): Promise<Currency | null>;
    update(id: string, updateCurrencyDto: UpdateCurrencyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    listCurrenciesAvailable(userId: string): Promise<Currency[]>;
}
