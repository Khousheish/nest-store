import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@Auth/auth.module';
import { typeormConfig } from '@Config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule,
  ],
})
export class AppModule {}
