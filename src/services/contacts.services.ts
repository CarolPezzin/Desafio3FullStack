import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { User } from "../entities/users.entity";
import { IContactRequest } from "../interfaces/contacts.interfaces";

const createContactsService = async ({
  name,
  email,
  fone,
}: IContactRequest, id: string) => {

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contacts)

    const user = await userRepository.findOneBy({
        id
    })

    const contact = contactRepository.create({
        name,
        email,
        fone,
        user: user!
    })
    await contactRepository.save(contact)

    return contact
};

const listContactsService = async(id: string): Promise<Contacts[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            contact: true
        }
    })


    return user?.contact!
};

const updatedContactService = async({ name, email, fone }: IContactRequest, id: string): Promise<Contacts | Array<string | number>> => {

    const contactRepository = AppDataSource.getRepository(Contacts)
  
    const findContact = await contactRepository.findOneBy({
        id
    })
  
    if(!findContact){
        return ['Contact not found', 404]
    }
  
    await contactRepository.update(
        id,
        {
            name: name ? name : findContact.name,
            email: email ? email : findContact.email,
            fone: fone ? fone : findContact.fone
        }
    )
  
    const contact = await contactRepository.findOneBy({
        id
    })
  
    return contact!
  
};

const contactDeleteService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contacts);
  
    const contact = await contactRepository.findOne({
      where: {
        id: id,
      },
    })
  
    if (!contact) {
      throw new Error("Contact not found");
    }
  
    await contactRepository.delete(contact!.id);
  
    return true;
  };

export {createContactsService, listContactsService, updatedContactService, contactDeleteService }
