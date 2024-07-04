import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PasienService } from './pasien.service';
import { Pasien } from './pasien.entity';

@Controller('pasien')
export class PasienController {
  constructor(private readonly pasienService: PasienService) {}

  @Get()
  findAll(): Promise<Pasien[]> {
    return this.pasienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pasien> {
    return this.pasienService.findOne(id);
  }

  @Post()
  create(@Body() pasien: Pasien): Promise<Pasien> {
    return this.pasienService.create(pasien);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pasien: Pasien): Promise<Pasien> {
    return this.pasienService.update(id, pasien);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pasienService.remove(id);
  }
}
