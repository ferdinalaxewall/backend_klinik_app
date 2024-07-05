import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { Pegawai } from './pegawai.entity';

@Controller('pegawai')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Get()
  findAll(): Promise<Pegawai[]> {
    return this.pegawaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pegawai> {
    return this.pegawaiService.findOne(id);
  }

  @Post()
  create(@Body() pegawai: Pegawai): Promise<Pegawai> {
    return this.pegawaiService.create(pegawai);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pegawai: Pegawai): Promise<Pegawai> {
    return this.pegawaiService.update(id, pegawai);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pegawaiService.remove(id);
  }
}
