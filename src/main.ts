import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const bootstrap: Function = async(): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule);

  // tslint:disable-next-line: no-magic-numbers
  await app.listen(3000);
};
bootstrap();
