import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoliModule } from './poli/poli.module';
import { JadwalDokterModule } from './jadwal_dokter/jadwal_dokter.module';
import { PegawaiModule } from './pegawai/pegawai.module';
import { PasienModule } from './pasien/pasien.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'klinik_app',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PoliModule,
    JadwalDokterModule,
    PegawaiModule,
    PasienModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
