import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class YelpService {
  constructor(
    private httpService: HttpService
  ) {}

  getRestaurantOptions({
    limit = 10,
    location = "1 Bloor St West",
    radius = 10000
  }): Promise<any> {

    const query = `{
      search(
          limit: ${limit},
          location: "${location}",
          radius: ${radius}
        ) {
        business {
          id,
          name,
          distance
        }
      }
    }`;

    // TODO: cast to array of Restaurants
    return this.httpService
      .request({
        data: {
          query: query
        }
      })
      .pipe(
        map(response => response.data.data.search.business)
      )
      .toPromise()
  }

}