export interface IUserRequest {
    name: string
    email: string
    password: string
    fone: string
    isActive: boolean
    isAdm: boolean
}

export interface IUserResponse extends IUserRequest {
    id:  string
}