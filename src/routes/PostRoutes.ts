import { PostController } from "../controller/PostController";


export const PostRoutes = [{
    method: "get",
    route: "/posts",
    controller: PostController,
    action: "all"
}, {
    method: "get",
    route: "/posts/:id",
    controller: PostController,
    action: "one"
}, {
    method: "post",
    route: "/post",
    controller: PostController,
    action: "save"
}, {
    method: "put",
    route: "/posts/:id",
    controller: PostController,
    action: "update"
}, {
    method: "delete",
    route: "/posts/:id",
    controller: PostController,
    action: "remove"
}];