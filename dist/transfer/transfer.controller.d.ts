import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    create(createTransferDto: CreateTransferDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTransferDto: UpdateTransferDto): string;
    remove(id: string): string;
}
