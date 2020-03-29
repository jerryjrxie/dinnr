import { Group } from '../groups.entity';

export class GroupOptionsDto {

  options;

  constructor(group) {
    this.options = group.options;
  }
}
