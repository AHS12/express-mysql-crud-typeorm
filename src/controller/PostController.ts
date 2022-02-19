import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

export class PostController {

    private postRepository = getRepository(Post);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let postToUpdate = await this.postRepository.findOne(request.params.id);
        await this.postRepository.update(request.params.id, request.body);
        return postToUpdate;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let postToRemove = await this.postRepository.findOne(request.params.id);
        await this.postRepository.remove(postToRemove);
    }

}

