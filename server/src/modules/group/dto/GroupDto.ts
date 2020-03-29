import { Group } from '../groups.entity';

export class GroupDto {

  clientKey: string;

  name: string;

  constructor(group: Group) {
    this.clientKey = group.key;
    this.name = group.name;
  }
}
