import {UserRoutes} from "./UserRoutes";
import { PostRoutes } from "./PostRoutes";

var Routes = [];


Routes = Routes.concat(UserRoutes);
Routes = Routes.concat(PostRoutes);

export {Routes};