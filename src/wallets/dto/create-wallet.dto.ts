import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateWalletDto {
    
@ApiProperty({required: true})
@IsNotEmpty()
@IsString()
name: string;

@ApiProperty({ description: 'Currency ID to associate with the wallet' })
@IsNotEmpty()
@IsString()
currency: string;
}
