import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
export declare class TransferService {
    create(createTransferDto: CreateTransferDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransferDto: UpdateTransferDto): string;
    remove(id: number): string;
}
