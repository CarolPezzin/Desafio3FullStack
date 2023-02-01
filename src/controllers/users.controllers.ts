import { Request, Response } from "express";
import { User } from "../entities/users.entity";
import { IUserRequest, IUserUpdateRequest } from "../interfaces/users.interfaces";
import { createUserService, listUserService, updateUserService, userDeleteService } from "../services/user.services";

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

const updateUserController = async (req: Request, res: Response) => {
    try {
        const user: IUserUpdateRequest = req.body
        const id: string = req.params.id
        const updatedUser = await updateUserService(user, id)
        if(updatedUser instanceof User){
            return res.json(updatedUser)
        }
        return res.status(updatedUser[1] as number).json({
            message: updatedUser[0]
        })
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const userDeleteController = async (req: Request, res: Response) => {

    const {id} = req.params
    
        const deletedId =  await userDeleteService(id)
        
        return res.status(204).json({deletedId, message: "User deleted with sucess!"}) 
 
}

export { createUserController, listUserConstroller, updateUserController, userDeleteController }