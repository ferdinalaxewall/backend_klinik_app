import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pegawai } from './pegawai.entity';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) {}

  findAll(): Promise<Pegawai[]> {
    return this.pegawaiRepository.find();
  }

  findOne(id: number): Promise<Pegawai> {
    return this.pegawaiRepository.findOneBy({ id });
  }

  create(pegawai: Pegawai): Promise<Pegawai> {
    return this.pegawaiRepository.save(pegawai);
  }

  async update(id: number, pegawai: Pegawai): Promise<Pegawai> {
    await this.pegawaiRepository.update(id, pegawai);
    return this.pegawaiRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pegawaiRepository.delete(id);
  }
}
