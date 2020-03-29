import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Restaurant } from './restaurant';
import { GroupOptions } from './group.options';

@Entity()
export class Group {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  key: string;

  @Column()
  name: string;

  @Column(type => GroupOptions)
  options: GroupOptions;

  @Column(type => Restaurant)
  restaurants: Restaurant[];

}