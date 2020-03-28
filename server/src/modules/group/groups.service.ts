import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsService {
  getGroup(groupId: number): string {
    return `This is group ${groupId}`;
  }
}