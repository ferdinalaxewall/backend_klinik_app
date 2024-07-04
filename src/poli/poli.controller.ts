import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PoliService } from './poli.service';
import { Poli } from './poli.entity';

@Controller('poli')
export class PoliController {
  constructor(private readonly poliService: PoliService) {}

  @Get()
  findAll(): Promise<Poli[]> {
    return this.poliService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Poli> {
    return this.poliService.findOne(id);
  }

  @Post()
  create(@Body() poli: Poli): Promise<Poli> {
    return this.poliService.create(poli);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() poli: Poli): Promise<Poli> {
    return this.poliService.update(id, poli);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.poliService.remove(id);
  }
}
