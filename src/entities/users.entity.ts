import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column()
    @Exclude()
    password: string

    @Column({ length: 15, unique: true })
    fone: string

    @Column()
    isActive: boolean = true

    @Column()
    isAdm: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export { User }