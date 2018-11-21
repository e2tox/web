import { WebFoundationApplication } from '@e2/web-foundation';
import { MyApplicationSettings } from '../conf/settings';
import * as Controllers from './controllers';

export class MyApplication extends WebFoundationApplication<MyApplicationSettings> {
  public onInitApplication() {
    if (this.settings.ENV !== 'production') {
      this.warn('+=============================================================+');
      this.warn('|                                                             |');
      this.warn('|     Please set environment variable NODE_ENV=production     |');
      this.warn('|                                                             |');
      this.warn('+=============================================================+');
    }
    this.addControllers(Controllers);
  }
}
