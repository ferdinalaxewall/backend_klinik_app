import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasienService } from './pasien.service';
import { PasienController } from './pasien.controller';
import { Pasien } from './pasien.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pasien])],
  providers: [PasienService],
  controllers: [PasienController],
})
export class PasienModule {}
