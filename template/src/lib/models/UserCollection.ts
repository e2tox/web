import { UserModel } from './UserModel';
import { Collection, Database } from '@e2/web-foundation';

export class UserCollection extends Collection<UserModel> {

  constructor(db: Database) {
    super(db, UserModel);
  }
  
  static getIndices(): Array<any> {
    return [
      { name: 'unique_id', key: { id: 1 }, unique: true, sparse: true }
    ];
  }
  
  createIndices(): Promise<any> {
    return super.createIndex(UserCollection.getIndices());
  }

}

