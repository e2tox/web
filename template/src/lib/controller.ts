import { MyApplicationSettings } from '../conf/settings';
import { WebController, middleware, NextFunction } from '@e2/web';
import { MyContext } from './context';

export class MyController extends WebController<MyApplicationSettings> {
  @middleware()
  async doCheck(ctx: MyContext, next: NextFunction) {
    console.log('doing something before the request');
    const result = await next();
    console.log('doing something after the request');
    return result;
  }
}
