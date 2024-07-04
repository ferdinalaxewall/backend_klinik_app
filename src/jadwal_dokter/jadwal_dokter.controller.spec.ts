import { Test, TestingModule } from '@nestjs/testing';
import { JadwalDokterController } from './jadwal_dokter.controller';

describe('JadwalDokterController', () => {
  let controller: JadwalDokterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JadwalDokterController],
    }).compile();

    controller = module.get<JadwalDokterController>(JadwalDokterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
