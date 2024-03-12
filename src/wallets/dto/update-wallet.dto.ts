import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWalletDto } from './create-wallet.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateWalletDto extends PartialType(CreateWalletDto) {

    @ApiProperty({required: true})
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @ApiProperty({ description: 'Currency ID to associate with the wallet' })
    @IsNotEmpty()
    @IsString()
    currency: string;

    


    
}
