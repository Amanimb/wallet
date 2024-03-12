import { Role } from '../../roles/entities/role.entity';
import { Status } from '../../statuses/entities/status.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { EntityHelper } from '../../utils/entity-helper';
import { Wallet } from 'src/wallets/entities/wallet.entity';
export declare class User extends EntityHelper {
    id: string;
    email: string | null;
    password: string;
    previousPassword: string;
    loadPreviousPassword(): void;
    setPassword(): Promise<void>;
    provider: string;
    socialId: string | null;
    firstName: string | null;
    lastName: string | null;
    photo?: FileEntity | null;
    role?: Role | null;
    status?: Status;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    wallets: Wallet[];
}
