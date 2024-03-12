import { Module, forwardRef } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { WalletsModule } from 'src/wallets/wallets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './entities/currency.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';

@Module({
  imports: [forwardRef(() => WalletsModule),
    TypeOrmModule.forFeature([Currency])
  ],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  exports:[CurrenciesModule],
})
export class CurrenciesModule {}
