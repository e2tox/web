import { Model } from '@e2/web-foundation';
import { model } from '@e2/web';

@model('user')
export class UserModel extends Model {
  id: number;
  displayName: string;
  email: string;
}
