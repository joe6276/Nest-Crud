import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import{TodoModule} from './todo/todo.module'

async function bootstrap() {
  const app = await NestFactory.create(TodoModule );
  await app.listen(3000);
  app.useGlobalPipes(
    new ValidationPipe()
  )
}
bootstrap();
