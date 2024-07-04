import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pasien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomor_rm: string;

  @Column()
  nama: string;

  @Column({ type: 'date' })
  tanggal_lahir: string;

  @Column()
  nomor_telepon: string;

  @Column({ type: 'text' })
  alamat: string;
}
