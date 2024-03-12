import { Wallet } from "src/wallets/entities/wallet.entity";
export declare class Currency {
    id: string;
    code: string;
    symbol: string;
    wallets: Wallet[];
}
