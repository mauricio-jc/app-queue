import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Generated('uuid')
  uuid: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Timestamp;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Timestamp;

  @Column({ name: 'name', length: '100', nullable: false })
  name: string;

  @Column({ name: 'document', length: 20, nullable: false })
  document: string;
}
