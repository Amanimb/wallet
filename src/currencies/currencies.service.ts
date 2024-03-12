import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './entities/currency.entity';
import { Code, Repository } from 'typeorm';
import { CreateWalletDto } from 'src/wallets/dto/create-wallet.dto';
import { WalletsService } from 'src/wallets/wallets.service';
import { Wallet } from 'src/wallets/entities/wallet.entity';

@Injectable()
export class CurrenciesService {
 constructor(
  @InjectRepository(Currency)
  private currencyRepository:Repository<Currency>, private walletService: WalletsService
 ){}
 
 
  create(createCurrencyDto: CreateCurrencyDto): Promise <Currency> {
    return this.currencyRepository.save(this.currencyRepository.create(createCurrencyDto));
  }

  findAll(): Promise<Currency[]> {
    return this.currencyRepository.find();
  }

  findOne(id: string) {
    return this.currencyRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
    return this.currencyRepository.update(id, updateCurrencyDto) ;
  }

  remove(id: string) {
    return this.currencyRepository.delete({
      id
    });
  }

 async listCurrenciesAvailable(userId: string): Promise<Currency[]> {
    const userWallets = await this.walletService.findWalletUser(userId);
    const currencies = await this.findAll();
    const currenciesAvailable: Currency[] = [];
  
    for (const currency of currencies) {
      let isCurrencyUsed = false;
      
      for (const wallet of userWallets) {
        const walletCurrencyId = typeof wallet.currency === 'string' ? wallet.currency : wallet.currency.id;

        if (currency.id === walletCurrencyId) {
          isCurrencyUsed = true;
          break; // Exit the inner loop since the currency is already used
        }
      }
  
      if (!isCurrencyUsed) {
        currenciesAvailable.push(currency);
      }
    }
  
    return currenciesAvailable;
  }
}