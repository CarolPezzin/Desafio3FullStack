import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import { createUserService, listUserService } from "../services/user.services";

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

const listUserConstroller = async( req: Request, res: Response) => {
    const users = await listUserService()
    return res.json(users)
}

export { createUserController, listUserConstroller }