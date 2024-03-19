import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { Currency } from 'src/currencies/entities/currency.entity';
import { NotFound } from '@aws-sdk/client-s3';
import { TransferMoneyDto } from './dto/transfer-money.dto';
import { Transfer } from 'src/transfer/entities/transfer.entity';


@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
    @InjectRepository(Transfer)
    private transferRepository: Repository<Transfer>
   
  ) {}

  create(createWalletDto: CreateWalletDto, userId: string): Promise<Wallet> {
    const wallet = new Wallet()
    wallet.currency = createWalletDto.currency
    wallet.name = createWalletDto.name
    wallet.user = userId
    return this.walletRepository.save(
      wallet
    );
  }

  findAll(): Promise<Wallet[]> {
    return this.walletRepository.find();
  }


  findWalletUser(user: string): Promise<Wallet[]> {
    return this.walletRepository.find({where: {user: {
      id: user
    }},  relations: ['currency'],
  });
  }

  
  findOne(id: string) {
    return this.walletRepository.findOne({
      where: { id }, relations: {
        currency: true
      }
    });
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return this.walletRepository.update(id, updateWalletDto);
  }

  remove(id: number) {
    return this.walletRepository.delete(id);
  }

  async addPrice(walletId: string, amount:number ): Promise<Wallet>{
    try{
    const wallet = await this.walletRepository.findOneOrFail({
      where: { id: walletId }
    })
    wallet.price += amount 
    return this.walletRepository.save(wallet);
  }catch (error) {
    throw new Error(`Failed to add currency to wallet with ID ${walletId}.`);
  }
}
  
   async transferMoney(WalletId: string, TransferMoneyDto: TransferMoneyDto ): Promise<{ senderWallet: Wallet, receiverWallet: Wallet, transfer: Transfer }>
   {
      const firstUserWallet = await this.walletRepository.findOne({
        where: {id : WalletId}, relations: {
          currency: true
        }
      });   
      if (!firstUserWallet){
        throw new NotFoundException("can not found wallet")
      } 

      const secondUserWallet = await this.walletRepository.findOne({where:{currency:
        {code: (firstUserWallet.currency as Currency).code },  user:{id:TransferMoneyDto.secondUserId}}})
           
      if (!secondUserWallet  ){ 
              throw new NotFoundException("can not transfer money")
            } 
           firstUserWallet.price -= TransferMoneyDto.amount
           secondUserWallet.price += TransferMoneyDto.amount

           const transfer = new Transfer();
           transfer.amount = TransferMoneyDto.amount;
           transfer.senderWallet = firstUserWallet;
           transfer.receiverWallet = secondUserWallet;

          
            await this.walletRepository.save([firstUserWallet, secondUserWallet]);  
            const savedTransfer = await this.transferRepository.save(transfer);

      
      return {senderWallet: firstUserWallet,
        receiverWallet: secondUserWallet,
        transfer: savedTransfer}
      } 
    
     
    }
   