import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>
  ) { }

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
  

 
}
