import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
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
    created_at : Date;

    @Column({
        type: "timestamp",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP"
    })
    updated_at : Date;

}
