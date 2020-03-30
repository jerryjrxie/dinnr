import { Column, Entity } from 'typeorm';

// TODO: move to restaurant module

export class Restaurant {

  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  distance: number;

  // @Column()
  // distance: string;
  constructor(
      id,
      name,
      distance
    ) {
    this.id = id;
    this.name = name;
    this.distance = distance;
  }
}