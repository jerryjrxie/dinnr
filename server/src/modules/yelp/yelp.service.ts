import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class YelpService {
  constructor(
    private httpService: HttpService
  ) {}

  getRestaurantOptions(options: any) { // TODO: remove any
    const query = `{
      search(location: "47 Coledale Rd") {
        business {
          name
        }
      }
    }`;

    return this.httpService
      .request({
        data: {
          query: query
        }
      })
      .pipe(
        map(response => response.data.data.search.business)
      )
  }

}