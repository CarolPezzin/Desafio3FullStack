import { IUserRequest, IUserResponse } from "../interfaces/users.interfaces";

export const createUserService = ({name, email, password, fone, isActive, isAdm} : IUserRequest): IUserResponse => {
    return {
        id: '1',
        name,
        email,
        password,
        fone,
        isActive,
        isAdm
    }    
}

