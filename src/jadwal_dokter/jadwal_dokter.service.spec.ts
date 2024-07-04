import { Test, TestingModule } from '@nestjs/testing';
import { JadwalDokterService } from './jadwal_dokter.service';

describe('JadwalDokterService', () => {
  let service: JadwalDokterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JadwalDokterService],
    }).compile();

    service = module.get<JadwalDokterService>(JadwalDokterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
