import { HttpModule, Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups.entity';
import { YelpModule } from '../yelp/yelp.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    YelpModule
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
