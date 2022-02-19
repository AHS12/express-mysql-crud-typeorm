import {faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Post } from '../../../entity/Post';


define(Post, () => {
    const post = new Post();
    post.title = faker.lorem.sentence(10);
    post.content = faker.lorem.paragraph(5);
    return post;
});