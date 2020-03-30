import { Entity, ObjectID, ObjectIdColumn, Column, Index, Generated } from 'typeorm';
import { Restaurant } from './restaurant';
import { GroupOptions } from './group.options';

@Entity()
export class Group {

  @ObjectIdColumn()
  id: ObjectID;

  @Index({ unique: true })
  @Column()
  key: string;

  @Column()
  name: string;

  @Column(type => GroupOptions)
  options: GroupOptions;

  @Column(type => Restaurant)
  restaurants: Restaurant[];

}