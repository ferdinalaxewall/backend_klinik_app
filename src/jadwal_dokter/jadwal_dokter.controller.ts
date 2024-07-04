import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { JadwalDokterService } from './jadwal_dokter.service';
import { JadwalDokter } from './jadwal_dokter.entity';

@Controller('jadwal-dokter')
export class JadwalDokterController {
  constructor(private readonly jadwalDokterService: JadwalDokterService) {}

  @Get()
  findAll(): Promise<JadwalDokter[]> {
    return this.jadwalDokterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<JadwalDokter> {
    return this.jadwalDokterService.findOne(id);
  }

  @Post()
  create(@Body() jadwalDokter: JadwalDokter): Promise<JadwalDokter> {
    return this.jadwalDokterService.create(jadwalDokter);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() jadwalDokter: JadwalDokter): Promise<JadwalDokter> {
    return this.jadwalDokterService.update(id, jadwalDokter);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.jadwalDokterService.remove(id);
  }
}
