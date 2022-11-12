import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Trips API - Desafio backend Clubpetro')
    .setDescription('Aqui é possível encontrar a documentação para a api de lugares e também testar o CRUD.')
    .setVersion('1.0')
    .addTag('trips')
    .setContact('Guilherme Ferreira', 'https://github.com/guiinow/', 'guilherme.sobrinho@familiapires.com.br')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

