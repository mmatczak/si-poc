import { SiModule } from './si.module';

describe('SiModule', () => {
  let siModule: SiModule;

  beforeEach(() => {
    siModule = new SiModule();
  });

  it('should create an instance', () => {
    expect(siModule).toBeTruthy();
  });
});
