import {Entity,PrimaryGeneratedColumn,Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity({name: "posts"})
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({
        type: "timestamp",
        nullable: true, 
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at : Date;

    @Column({
        type: "timestamp",
        nullable: true, 
        default: () => "CURRENT_TIMESTAMP"
    })
    updated_at : Date;

    @ManyToOne(type => User, user => user.posts)
    user: User;

}
