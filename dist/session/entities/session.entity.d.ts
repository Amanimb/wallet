import { User } from '../../users/entities/user.entity';
import { EntityHelper } from '../../utils/entity-helper';
export declare class Session extends EntityHelper {
    id: number;
    user: User;
    createdAt: Date;
    deletedAt: Date;
}
