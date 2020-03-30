import { Injectable } from '@nestjs/common';
import { Group } from './groups.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { nanoid } from 'nanoid';
import { YelpService } from '../yelp/yelp.service';
import { Restaurant } from './restaurant';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: MongoRepository<Group>,
    private yelpService: YelpService
  ) {}

  async createGroup(): Promise<Group> {
    let key;
    do {
      key = nanoid(6);
    } while (await this.groupRepository.findOne({ key: key })); // sanity check key uniqueness
    // TODO: manage uniqueness with mongodb feature somehow
    const group = await this.groupRepository.create({
      key: key,
    });
    return this.groupRepository.save(group);
  }

  async getGroup(key: string): Promise<Group> {
    return this.groupRepository.findOneOrFail({ key: key });
  }

  async updateGroup(key: string, data: any): Promise<Group> {
    await this.groupRepository.update({ key: key }, {
      options: data.options
    });
    const group = await this.groupRepository.findOne({ key: key });
    group.restaurants = await this.yelpService.getRestaurantOptions(group.options);
    await this.groupRepository.save(group);
    return group;
  }

  async getRestaurants(key: string): Promise<Restaurant[]> {
    const group = await this.groupRepository.findOne({ key: key });
    return group.restaurants;
  }

}