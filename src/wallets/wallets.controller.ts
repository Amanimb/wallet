import { Controller, Get, Post, Body,Request, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { request } from 'http';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto, @Request() request) {
    
    return this.walletsService.create(createWalletDto, request.user.id);
  }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }
  
  @Get(':user')
  find_Wallet_User(@Request() request){
    return this.walletsService.findAll();
  }


  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(+id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletsService.remove(+id);
  }

  @Patch(':id/add-price')
  async addPrice(@Param('id') walletId: string, @Param('amount') amount:number) {
    try {
      const updatedWallet = await this.walletsService.addPrice(walletId, amount);
      return { message: 'Price updated successfully', wallet: updatedWallet };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { error: error.message };
      }
      return { error: 'Failed to update price.' };
    }
  }
}
