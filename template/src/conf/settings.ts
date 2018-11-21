import { conf } from '@e2/web';
import { WebFoundationSettings } from '@e2/web-foundation';

export class MyApplicationSettings extends WebFoundationSettings {
  @conf()
  AWS_ACCESS_KEY_ID: string;

  @conf()
  AWS_SECRET_ACCESS_KEY: string;

  @conf()
  AWS_DEFAULT_REGION: string;
}
