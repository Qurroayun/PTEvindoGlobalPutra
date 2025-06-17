import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest js application is running!, Enjoy the code and have fun! ';
  }
}
