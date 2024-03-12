import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './entities/currency.entity';
export declare class CurrenciesController {
    private readonly currenciesService;
    constructor(currenciesService: CurrenciesService);
    create(createCurrencyDto: CreateCurrencyDto): Promise<Currency>;
    findAll(): Promise<Currency[]>;
    listCurrenciesAvailable(request: any): Promise<Currency[]>;
    findOne(id: string): Promise<Currency | null>;
    update(id: string, updateCurrencyDto: UpdateCurrencyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
