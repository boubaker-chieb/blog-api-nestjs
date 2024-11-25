import { AppModule } from 'src/app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * Global pipes configuration
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  /**
   * Swagger configuration
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS - Blog APP API')
    .setDescription('NestJS - Blog APP API')
    .setTermsOfService('')
    .addServer('http://localhost:3000')
    .addServer('http://127.0.0.1:3000')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDocument);
  /**
   * Start API
   */
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
