import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/user.services";

const createUserController = async (req: Request, res: Response) => {
    try{
        const user: IUserRequest = req.body
        const createUser = await createUserService(user)
        return res.json(createUser)
    }catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export { createUserController }