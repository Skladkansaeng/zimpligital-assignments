import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('price')
  getPrice(@Query('symbol') symbol, @Query('companyName') companyName) {
    return this.appService.findPrice({ symbol, companyName });
  }
}
