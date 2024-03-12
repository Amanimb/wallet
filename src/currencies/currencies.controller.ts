import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Request} from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Currency } from './entities/currency.entity';


@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Curency collection')
@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll() {
    return this.currenciesService.findAll();
  }

 /* @Get(':userId/available')
  async listCurrenciesAvailable(@Request()Request): Promise<Currency[]> {
    return this.currenciesService.listCurrenciesAvailable();
  }
*/

@Get('available')
  async listCurrenciesAvailable(@Request() request): Promise<Currency[]> {
    return this.currenciesService.listCurrenciesAvailable(request.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currenciesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
    return this.currenciesService.update(id, updateCurrencyDto);
  }





  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currenciesService.remove(id);
  }
}
