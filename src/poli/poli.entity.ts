import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poli {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_poli: string;
}
