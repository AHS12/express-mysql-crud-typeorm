import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";


export default class InitialSeeding implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {

    const users = await factory(User)().createMany(15);

    //const posts = await factory(Post)().createMany(15);

    await factory(Post)()
      .map(async (post) => {
        post.user = users[Math.floor(Math.random() * users.length)];
        return post;
      })
      .createMany(100);
      


  }
}