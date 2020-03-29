import { Column } from 'typeorm';

// TODO: move to restaurant module
export class Restaurant {

  @Column()
  name: string;

  @Column()
  address: string;

  // @Column()
  // distance: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}