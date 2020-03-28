import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './modules/group/groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'dinnr',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    GroupsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
