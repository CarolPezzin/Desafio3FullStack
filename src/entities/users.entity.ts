import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column()
    password: string

    @Column({ length: 15, unique: true })
    fone: string

    @Column()
    isActive: boolean

    @Column()
    isAdm: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export { User }