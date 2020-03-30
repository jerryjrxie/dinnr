import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupDto } from './dto/GroupDto';
import { GroupOptionsDto } from './dto/GroupOptionsDto';
import { Group } from './groups.entity';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Post()
  async create(): Promise<GroupDto> {
    const group = await this.groupsService.createGroup();
    return new GroupDto(group);
  }

  @Get(':key')
  async read(@Param('key') key) {
    try {
      return await this.groupsService.getGroup(key); // TODO: catch this in some kind of exception filter
    } catch(e) {
      if (e instanceof EntityNotFoundError) {
        throw new HttpException(`Group with key: ${key} not found`, HttpStatus.NOT_FOUND)
      }
    }
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
