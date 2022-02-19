import {faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from '../../../entity/User';




// define(User, (faker: typeof Faker, settings: { roles: string[] }) => {
//     const user = new User();
//     user.firstName = faker.name.firstName();
//     user.lastName = faker.name.lastName();
//     user.age = faker.random.number();
//     user.email = faker.internet.email();
//     user.password = faker.internet.password();
//     user.roles = settings.roles;
//     return user;
// });
define(User, () => {
    const user = new User();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.age = faker.datatype.number({
        min: 18,
        max: 60
    });
    return user;
});
