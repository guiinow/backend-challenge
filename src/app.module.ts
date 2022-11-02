import { Module } from '@nestjs/common';
import { ViagensController } from './viagens.controler';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [ViagensController],
  providers: [],
})
export class AppModule {}
