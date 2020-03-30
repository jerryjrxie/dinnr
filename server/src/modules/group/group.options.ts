import { Entity, Column } from 'typeorm';


export class GroupOptions {

  @Column()
  limit: number;

  @Column()
  location: string;

  @Column()
  radius: number;

}