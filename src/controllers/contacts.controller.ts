import { Request, Response } from "express";
import { Contacts } from "../entities/contacts.entity";
import { IContactRequest } from "../interfaces/contacts.interfaces";
import { contactDeleteService, createContactsService, listContactsService, updatedContactService } from "../services/contacts.services";

const createContactsController = async(req: Request, res: Response) => {
    try {
        const data: IContactRequest = req.body 
        const id = req.user.id
        const createdContact = await createContactsService(data, id)
        return res.json(createdContact)       
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
};

const listContactsController = async(req: Request, res: Response) => {
    const id = req.user.id
    const contacts = await listContactsService(id)
    return res.json(contacts)
};

const updateContactController = async (req: Request, res: Response) => {
    try {
        const contact = req.body
        const id: string = req.params.id
        const updatedContact = await updatedContactService(contact, id)
        if(updatedContact instanceof Contacts){
            return res.json(updatedContact)
        }
        return res.status(updatedContact[1] as number).json({
            message: updatedContact[0]
        })
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
};

const contactDeleteController = async (req: Request, res: Response) => {

    const {id} = req.params
    
        const deletedId =  await contactDeleteService(id)
        
        return res.status(204).json({deletedId, message: "User deleted with sucess!"}) 
 
}

export {createContactsController, listContactsController, updateContactController, contactDeleteController}