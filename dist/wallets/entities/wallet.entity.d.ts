import { Currency } from "src/currencies/entities/currency.entity";
import { User } from "src/users/entities/user.entity";
export declare class Wallet {
    id: string;
    name: string;
    price: number;
    user: User | string;
    currency: Currency | string;
}
