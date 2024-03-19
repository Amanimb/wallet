// transfer-money.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransferMoneyDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  secondUserId: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  @IsNumber()
  amount: number
  

}
