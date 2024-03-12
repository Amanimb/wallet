import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCurrencyDto {
    @ApiProperty({required: true, description: 'currency code'})
    @IsNotEmpty()
    @IsString()
    code: string;

    @ApiProperty({required: false, description: 'currency symbol'})
    @IsOptional()
    @IsString()
    symbol: string;
}
