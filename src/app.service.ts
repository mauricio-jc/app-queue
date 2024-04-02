import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientDto } from './client.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    @InjectQueue('recording-db') private recordingDb: Queue,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async create(clientDto: ClientDto): Promise<any> {
    await this.recordingDb.add('create-recording-db', clientDto, {
      delay: 20000,
    });
  }
}
