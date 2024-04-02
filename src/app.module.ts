import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './client.entity';
import { BullModule } from '@nestjs/bull';
import { RecordingDbProcessor } from './recording-db.processor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'app_queue',
      entities: [Client],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'recording-db',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RecordingDbProcessor],
})
export class AppModule {}
