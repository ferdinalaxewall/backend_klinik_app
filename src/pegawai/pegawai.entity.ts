import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pegawai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nip: string;

  @Column()
  nama: string;

  @Column({ type: 'date' })
  tanggal_lahir: string;

  @Column()
  nomor_telepon: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
