import { Wallet } from "src/wallets/entities/wallet.entity";
export declare class Transfer {
    id: number;
    amount: number;
    senderWallet: Wallet;
    receiverWallet: Wallet;
}
