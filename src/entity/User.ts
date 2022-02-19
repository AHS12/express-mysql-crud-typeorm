import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from './Post';


@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({
        type: "timestamp",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date;

    @Column({
        type: "timestamp",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP"
    })
    updated_at: Date;

    @OneToMany(type => Post, post => post.user)
    posts?: Post[];

}
