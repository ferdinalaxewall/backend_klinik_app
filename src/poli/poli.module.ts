import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoliService } from './poli.service';
import { PoliController } from './poli.controller';
import { Poli } from './poli.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poli])],
  providers: [PoliService],
  controllers: [PoliController],
})
export class PoliModule {}
