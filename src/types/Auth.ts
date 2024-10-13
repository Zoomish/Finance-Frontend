import { IUser } from './User'

export interface IUserData {
    email: string
    password: string
}

export interface IAuthResponse {
    token: string
    user: IUser
}

export interface IToken {
    token: string
}
