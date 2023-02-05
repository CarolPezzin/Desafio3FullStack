import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./users.entity";
import { v4 as uuid } from "uuid";

@Entity('contacts')
class Contacts {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @Column({ length: 120 })
    email: string

    @Column()
    fone: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User)
    user: User
}

export { Contacts }