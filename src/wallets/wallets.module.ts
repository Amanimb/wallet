import { Module, forwardRef } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { CurrenciesModule } from 'src/currencies/currencies.module';
import { Transfer } from 'src/transfer/entities/transfer.entity';

@Module({
  imports: [forwardRef(() => CurrenciesModule),
    TypeOrmModule.forFeature([Wallet, Transfer])
  ],
 controllers: [WalletsController],
  providers: [WalletsService],
  exports: [ WalletsService],
})
export class WalletsModule {}
