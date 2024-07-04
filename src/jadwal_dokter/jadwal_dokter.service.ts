import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JadwalDokter } from './jadwal_dokter.entity';

@Injectable()
export class JadwalDokterService {
  constructor(
    @InjectRepository(JadwalDokter)
    private jadwalDokterRepository: Repository<JadwalDokter>,
  ) {}

  findAll(): Promise<JadwalDokter[]> {
    return this.jadwalDokterRepository.find();
  }

  async findOne(id: number): Promise<JadwalDokter> {
    const data = await this.jadwalDokterRepository.findOneBy({ id });
    if (data) return data;
    
    throw new Error('Jadwal Dokter not found!');
  }

  create(jadwalDokter: JadwalDokter): Promise<JadwalDokter> {
    return this.jadwalDokterRepository.save(jadwalDokter);
  }

  async update(id: number, jadwalDokter: JadwalDokter): Promise<JadwalDokter> {
    const updatedResult = await this.jadwalDokterRepository.update(id, jadwalDokter);
    if (updatedResult.affected > 0) return this.findOne(id);

    throw new Error('Jadwal Dokter Update Failed!');
  }

  async remove(id: number): Promise<void> {
    await this.jadwalDokterRepository.delete(id);
  }
}
