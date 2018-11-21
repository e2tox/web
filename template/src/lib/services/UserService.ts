import { MyContext } from '../context';
import { UserModel } from '../models/UserModel';
import { UserCollection } from '../models/UserCollection';

export class UserService {
  async listUser(ctx: MyContext): Promise<Array<UserModel>> {
    const Users = await ctx.resolve(UserCollection);
    const found = await Users.find();
    if (found) {
      return found.results;
    }
    return [];
  }

  async findUser(ctx: MyContext, id: number): Promise<UserModel | null> {
    const Users = await ctx.resolve(UserCollection);
    return Users.findOne({ id: Number(id) });
  }

  async createUser(ctx: MyContext, user: any): Promise<UserModel | null> {
    const Users = await ctx.resolve(UserCollection);
    const id = await Users.nextSequenceId();
    return Users.insertOne({ id, ...user });
  }
}
