import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poli } from './poli.entity';

@Injectable()
export class PoliService {
  constructor(
    @InjectRepository(Poli)
    private poliRepository: Repository<Poli>,
  ) {}

  findAll(): Promise<Poli[]> {
    return this.poliRepository.find();
  }

  async findOne(id: number): Promise<Poli> {
    const data = await this.poliRepository.findOneBy({id});
    if (data) return data;
    
    throw new Error('Poli not found!');
  }

  create(poli: Poli): Promise<Poli> {
    return this.poliRepository.save(poli);
  }

  async update(id: number, poli: Poli): Promise<Poli> {
    const updatedResult = await this.poliRepository.update(id, poli);
    if (updatedResult.affected > 0) return this.findOne(id);

    throw new Error('Poli Update Failed');
  }

  async remove(id: number): Promise<void> {
    await this.poliRepository.delete(id);
  }
}
