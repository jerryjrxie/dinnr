import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupDto } from './dto/GroupDto';
import { GroupOptionsDto } from './dto/GroupOptionsDto';
import { Group } from './groups.entity';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Post()
  async create(): Promise<GroupDto> {
    const group = await this.groupsService.createGroup();
    return new GroupDto(group);
  }

  @Get(':id')
  async read(@Param() params): Promise<GroupDto> {
    const group = await this.groupsService.getGroup(params.id);
    if (!group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND)
    }
    return new GroupDto(group);
  }

  @Put(':key')
  updateOptions(@Param('key') key, @Body() data) {
    return this.groupsService.updateGroup(key, data);
  }

  @Get(':key/restaurants')
  getRestaurants(@Param('key') key) {
    return this.groupsService.getRestaurants(key);
  }

}
