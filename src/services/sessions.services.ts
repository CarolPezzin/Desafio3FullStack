import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { ISessionRequest } from "../interfaces/session.interfaces";
import { compare } from "bcrypt"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const createSessionService = async ({email, password}: ISessionRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({
        email:email
    })
    if(!user){
        throw new Error("Invalid email or password")
    };
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new Error('Invalid user or password')
    }

    const token = jwt.sign({
            isAdm: user.isAdm,
            user: user.email
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user.id
        }
    )
        
    const ret = {token, user}
    
    return ret
}

export default createSessionService