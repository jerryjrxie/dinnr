import { HttpModule, Module } from '@nestjs/common';
import { YelpService } from './yelp.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        method: 'post',
        headers: {'Authorization': `Bearer ${configService.get('YELP_CLIENT_KEY')}`},
        url: 'https://api.yelp.com/v3/graphql',
      })
    })
  ],
  providers: [YelpService],
  exports: [YelpService]
})
export class YelpModule {}