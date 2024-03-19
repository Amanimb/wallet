// transfer.entity.ts
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => Wallet)
  @JoinColumn()
  senderWallet: Wallet;

  @ManyToOne(() => Wallet)
  @JoinColumn()
  receiverWallet: Wallet;
}
