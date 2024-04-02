import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientDto } from './client.dto';

@Processor('recording-db')
export class RecordingDbProcessor {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  @Process('create-recording-db')
  async createrecordingdb(job: Job<ClientDto>) {
    await this.sleep(10000);
    await this.clientRepository.save(job.data);
  }

  async sleep(seconds: number) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(resolve, seconds);
      } catch (error) {
        reject(error);
      }
    });
  }
}
