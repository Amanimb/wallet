import { Wallet } from "src/wallets/entities/wallet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Currency {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;

    @Column({nullable: true})
    symbol: string;
    
   
    @OneToMany(() => Wallet, (wallet) => wallet.currency)
    wallets: Wallet[]

}
