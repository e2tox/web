import { controller, method } from '@e2/web';
import { MyController } from '../controller';
import { MyContext } from '../context';
import { UserService } from '../services/UserService';

@controller('/api')
export class UserController extends MyController {
  @method('POST', '/user')
  async create(ctx: MyContext) {
    const Users = await ctx.resolve(UserService);
    return Users.createUser(ctx, await ctx.req.json());
  }

  @method('GET', '/user')
  async list(ctx: MyContext) {
    const Users = await ctx.resolve(UserService);
    return Users.listUser(ctx);
  }

  @method('GET', '/user/:id')
  async user(ctx: MyContext) {
    const Users = await ctx.resolve(UserService);
    return Users.findUser(ctx, Number(ctx.params.id));
  }
}
