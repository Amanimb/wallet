import { ApiResponseProperty } from "@nestjs/swagger";
import { Currency } from "src/currencies/entities/currency.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn('uuid')
id: string;
@Column()
name: string;

@Column({type:'float' ,default: 0})
@ApiResponseProperty()
price: number;



@ManyToOne(() => User, (user) => user.wallets)
user: User | string

@ManyToOne(() => Currency, (currency) => currency.wallets)
currency: Currency | string


}
