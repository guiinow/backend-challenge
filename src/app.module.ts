import { Module } from '@nestjs/common';
import { ViagensController } from './viagens.controler';

@Module({
  imports: [],
  controllers: [ViagensController],
  providers: [],
})
export class AppModule {}
