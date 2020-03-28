import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
