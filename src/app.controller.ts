import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './client.entity';
import { ClientDto } from './client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clients')
  async findAll(): Promise<Client[]> {
    return await this.appService.findAll();
  }

  @Post('clients')
  async create(@Body() clientDto: ClientDto): Promise<any> {
    await this.appService.create(clientDto);
    return clientDto;
  }
}
