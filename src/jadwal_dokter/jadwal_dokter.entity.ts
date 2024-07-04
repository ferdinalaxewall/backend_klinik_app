import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JadwalDokter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_poli: string;

  @Column()
  nama_dokter: string;

  @Column()
  tanggal: Date;
}
