import { Column } from 'typeorm';


export class YelpOptionsDoc {

  @Column()
  limit: number;

  @Column()
  location: string;

  @Column()
  radius: number;

}