import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pasien } from './pasien.entity';

@Injectable()
export class PasienService {
  constructor(
    @InjectRepository(Pasien)
    private pasienRepository: Repository<Pasien>,
  ) {}

  findAll(): Promise<Pasien[]> {
    return this.pasienRepository.find();
  }

  findOne(id: number): Promise<Pasien> {
    return this.pasienRepository.findOneBy({ id });
  }

  create(pasien: Pasien): Promise<Pasien> {
    return this.pasienRepository.save(pasien);
  }

  async update(id: number, pasien: Pasien): Promise<Pasien> {
    await this.pasienRepository.update(id, pasien);
    return this.pasienRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pasienRepository.delete(id);
  }
}
