import { Entity, Column } from 'typeorm';

@Entity()
export class GroupOptions {

  @Column()
  address: string

}