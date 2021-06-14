import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { Logger } from '@nestjs/common';

const port = 3001;
async function bootstrap() {

  console.log(process.env.PORT)
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Project-bus')
      .setDescription('Back-end')
      .setVersion('1.0')
      .addTag('bus')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  next(),
}),
  await app.listen(process.env.PORT || 3000);
  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');

}
bootstrap();
