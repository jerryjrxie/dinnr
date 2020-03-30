import { Entity, ObjectID, ObjectIdColumn, Column, Index, Generated } from 'typeorm';
import { BusinessDoc } from '../business/business.doc';
import { YelpOptionsDoc } from '../yelp/yelp.options.doc';

@Entity()
export class Group {

  @ObjectIdColumn()
  id: ObjectID;

  @Index({ unique: true })
  @Column()
  key: string;

  @Column()
  name: string;

  @Column(type => YelpOptionsDoc)
  options: YelpOptionsDoc;

  @Column(type => BusinessDoc)
  businesses: BusinessDoc[];

}