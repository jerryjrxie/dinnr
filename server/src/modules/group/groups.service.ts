import { Injectable } from '@nestjs/common';
import { Group } from './groups.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';
import { YelpService } from '../yelp/yelp.service';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    private yelpService: YelpService
  ) {}

  async createGroup(): Promise<Group> {
    let key;
    do {
      key = nanoid(6);
    } while (await this.groupRepository.findOne({ key: key })); // sanity check key uniqueness

    const group = await this.groupRepository.create({ key: key });
    return this.groupRepository.save(group);
  }

  async getGroup(key: string): Promise<Group> {
    return this.groupRepository.findOne({ key: key });
  }

  async updateGroup(key: string, data: any) {
    await this.groupRepository.update({ key: key }, {
      options: data.options
    });
    // TODO: fix this disgusting code lol
    return this.groupRepository.findOne({ key: key });
  }

  async getRestaurants(key: string) {
    const group = await this.groupRepository.findOne({ key: key });
    const options = this.yelpService.getRestaurantOptions({
      address: '1 Bloor St West'
    });
    return options
  }

}