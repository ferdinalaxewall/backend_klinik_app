import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JadwalDokterService } from './jadwal_dokter.service';
import { JadwalDokterController } from './jadwal_dokter.controller';
import { JadwalDokter } from './jadwal_dokter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JadwalDokter])],
  providers: [JadwalDokterService],
  controllers: [JadwalDokterController],
})
export class JadwalDokterModule {}
